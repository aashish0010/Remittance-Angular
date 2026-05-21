import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { z } from 'zod';
import { TranslocoModule } from '@jsverse/transloco';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { PublicSettingsService } from '../../../core/services/public-settings.service';
import { SeoService } from '../../../core/services/seo.service';

interface PortalOption {
  key: string;
  label: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

const ALL_PORTALS: Record<string, PortalOption> = {
  Admin: {
    key: 'Admin',
    label: 'auth.portals.admin.label',
    description: 'auth.portals.admin.description',
    icon: 'admin_panel_settings',
    route: '/admin/dashboard',
    color: '#1565C0'
  },
  Agent: {
    key: 'Agent',
    label: 'auth.portals.agent.label',
    description: 'auth.portals.agent.description',
    icon: 'storefront',
    route: '/agent/dashboard',
    color: '#2E7D32'
  },
  Customer: {
    key: 'Customer',
    label: 'auth.portals.customer.label',
    description: 'auth.portals.customer.description',
    icon: 'person',
    route: '/customer/dashboard',
    color: '#7B1FA2'
  },
};

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    TranslocoModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  errorMessage = '';
  loading = false;
  hidePassword = true;
  rememberMe = false;

  fieldErrors: Partial<Record<keyof LoginForm, string>> = {};

  // Portal selection step
  showPortalSelection = false;
  welcomeName = '';
  availablePortals: PortalOption[] = [];

  // UI Configuration — reads from the signal; Angular re-renders when it updates
  get appName(): string { return this.publicSettings.companyName() || 'Remittance'; }
  currentYear = new Date().getFullYear();

  // Login attempt lockout
  failedAttempts = 0;
  isLockedOut = false;
  lockoutRemainingSeconds = 0;
  private lockoutTimer?: ReturnType<typeof setTimeout>;
  private lockoutCountdown?: ReturnType<typeof setInterval>;

  private storedLoginData: any = null;
  private returnUrl = '';

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private router: Router,
    private route: ActivatedRoute,
    private appSettings: AppSettingsService,
    public publicSettings: PublicSettingsService,
    private seo: SeoService,
  ) { }

  ngOnDestroy(): void {
    if (this.lockoutTimer) clearTimeout(this.lockoutTimer);
    if (this.lockoutCountdown) clearInterval(this.lockoutCountdown);
  }

  ngOnInit(): void {
    this.seo.setPage('Sign In', 'Sign in to RemitAdmin to manage money transfers, agents, compliance, and more.');
    // Read returnUrl for post-login redirect
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
    // Pre-fill email if Remember Me was set
    const savedEmail = localStorage.getItem('rememberMe_email');
    if (savedEmail) {
      this.loginForm.patchValue({ email: savedEmail });
      this.rememberMe = true;
    }
    // Clear field errors on value change
    this.loginForm.valueChanges.subscribe(() => {
      this.fieldErrors = {};
    });
  }

  private validateForm(): LoginForm | null {
    const result = loginSchema.safeParse(this.loginForm.getRawValue());
    if (!result.success) {
      this.fieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof LoginForm;
        if (!this.fieldErrors[field]) {
          this.fieldErrors[field] = issue.message;
        }
      }
      return null;
    }
    this.fieldErrors = {};
    return result.data;
  }

  login(): void {
    if (this.isLockedOut) return;

    const data = this.validateForm();
    if (!data) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.api.login(data.email, data.password).subscribe({
      next: (res) => {
        this.loading = false;

        if (!res?.success || !res.data) {
          this.failedAttempts++;
          const maxAttempts = this.appSettings.maxLoginAttempts;
          const remaining = maxAttempts - this.failedAttempts;
          if (this.failedAttempts >= maxAttempts) {
            this.isLockedOut = true;
            const lockoutMs = (this.appSettings.lockoutDurationMinutes || 5) * 60 * 1000;
            this.lockoutRemainingSeconds = Math.floor(lockoutMs / 1000);
            this.errorMessage = 'Maximum login attempted, Account has been locked. Please try again after 5 minutes.';
            this.lockoutCountdown = setInterval(() => {
              this.lockoutRemainingSeconds--;
              if (this.lockoutRemainingSeconds <= 0) {
                clearInterval(this.lockoutCountdown);
                this.lockoutCountdown = undefined;
              }
            }, 1000);
            this.lockoutTimer = setTimeout(() => {
              this.isLockedOut = false;
              this.failedAttempts = 0;
              this.errorMessage = '';
              this.lockoutRemainingSeconds = 0;
            }, lockoutMs);
          } else {
            this.errorMessage = `${res?.message || 'Invalid credentials.'} ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`;
          }
          return;
        }

        // Successful login — reset failure counter
        this.failedAttempts = 0;

        // Remember Me — persist or clear email
        if (this.rememberMe) {
          localStorage.setItem('rememberMe_email', data.email);
        } else {
          localStorage.removeItem('rememberMe_email');
        }

        const d = res.data;
        this.storedLoginData = d;

        // Determine available portals
        const portalKeys = d.availablePortals?.length ? d.availablePortals : [d.portal];
        this.availablePortals = portalKeys
          .filter((p: string) => ALL_PORTALS[p])
          .map((p: string) => ALL_PORTALS[p]);

        if (this.availablePortals.length === 1) {
          this.setAuthAndNavigate(this.availablePortals[0].route);
        } else if (this.availablePortals.length > 1) {
          this.welcomeName = d.fullName;
          this.showPortalSelection = true;
        } else {
          // Fallback: detect portal from roles
          const roles = (d.roles || []).map((r: string) => r.toLowerCase());
          if (roles.some((r: string) => r.includes('admin') || r.includes('operations') || r.includes('compliance'))) {
            this.setAuthAndNavigate('/admin/dashboard');
          } else if (roles.some((r: string) => r.includes('agent'))) {
            this.setAuthAndNavigate('/agent/dashboard');
          } else {
            this.setAuthAndNavigate('/customer/dashboard');
          }
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Unable to connect to server. Please check your connection.';
        // Network errors don't count as failed login attempts
      },
    });
  }

  selectPortal(portal: PortalOption): void {
    this.setAuthAndNavigate(portal.route);
  }

  get loginDisabled(): boolean { return this.loading || this.isLockedOut; }

  backToLogin(): void {
    this.showPortalSelection = false;
    this.storedLoginData = null;
    this.availablePortals = [];
    this.errorMessage = '';
    this.failedAttempts = 0;
    this.loginForm.patchValue({ password: '' });
  }

  private setAuthAndNavigate(route: string): void {
    const d = this.storedLoginData;
    this.auth.setAuth(d.token, d.refreshToken, d.userId, d.fullName, d.email, d.roles);

    // Load menu privileges in background
    this.api.getPrivileges().subscribe(res => {
      if (res?.success && res.data) {
        this.auth.setPrivileges(res.data);
      }
    });

    // If came from a protected URL (e.g. shared link in another browser), go there
    const target = this.returnUrl || route;
    this.router.navigateByUrl(target);
  }
}
