import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { z } from 'zod';
import { ApiService } from '../../../core/services/api.service';
import { AuthStateService } from '../../../core/services/auth-state.service';

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
    label: 'Admin Portal',
    description: 'Manage agents, rates, compliance & operations',
    icon: 'admin_panel_settings',
    route: '/admin/dashboard',
    color: '#1565C0'
  },
  Agent: {
    key: 'Agent',
    label: 'Agent Portal',
    description: 'Send money, view transactions & commissions',
    icon: 'storefront',
    route: '/agent/dashboard',
    color: '#2E7D32'
  },
  Customer: {
    key: 'Customer',
    label: 'Customer Portal',
    description: 'Track transfers & manage your account',
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
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

  // UI Configuration
  appName = 'Remittance';
  currentYear = new Date().getFullYear();

  private storedLoginData: any = null;

  constructor(
    private api: ApiService,
    private auth: AuthStateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
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
          this.errorMessage = res?.message || 'Invalid credentials. Please try again.';
          return;
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
      },
    });
  }

  selectPortal(portal: PortalOption): void {
    this.setAuthAndNavigate(portal.route);
  }

  backToLogin(): void {
    this.showPortalSelection = false;
    this.storedLoginData = null;
    this.availablePortals = [];
    this.errorMessage = '';
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

    this.router.navigate([route]);
  }
}
