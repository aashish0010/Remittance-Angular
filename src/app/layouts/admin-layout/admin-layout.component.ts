import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AuthStateService } from '../../core/services/auth-state.service';
import { ApiService } from '../../core/services/api.service';
import { IdleTimeoutService } from '../../core/services/idle-timeout.service';
import { AppSettingsService } from '../../core/services/app-settings.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  section?: string;
}

// Complete admin nav items — filtered by role/privileges at runtime
const ALL_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
  { label: 'Agents', icon: 'people_outline', route: '/admin/agents', section: 'Agent Management' },

  { label: 'Agent Setup', icon: 'tune', route: '/admin/accounting', section: 'Agent Management' },
  { label: 'Register', icon: 'person_add_alt', route: '/admin/customer-register', section: 'Customers' },
  { label: 'Report', icon: 'assessment', route: '/admin/customer-report', section: 'Customers' },
  { label: 'Receivers', icon: 'contact_phone', route: '/admin/receivers', section: 'Operations' },
  { label: 'Exchange Rates', icon: 'currency_exchange', route: '/admin/rates', section: 'Operations' },
  { label: 'Service Charges', icon: 'payments', route: '/admin/commissions', section: 'Operations' },
  { label: 'Routing', icon: 'alt_route', route: '/admin/routing', section: 'Operations' },
  { label: 'Transactions', icon: 'receipt_long', route: '/admin/transactions', section: 'Operations' },
  { label: 'Compliance Setup', icon: 'tune', route: '/admin/compliance-setup', section: 'Compliance' },
  { label: 'Alerts', icon: 'security', route: '/admin/compliance', section: 'Compliance' },
  { label: 'Sanctions', icon: 'gavel', route: '/admin/sanctions', section: 'Compliance' },
  { label: 'Static Values', icon: 'dataset', route: '/admin/static-values', section: 'System' },
  { label: 'Settings', icon: 'settings_cog', route: '/admin/settings', section: 'System' },
  { label: 'Agent Statement', icon: 'account_balance', route: '/admin/reports/agent-statement', section: 'Reports' },
  { label: 'Transaction Report', icon: 'summarize', route: '/admin/reports/transactions', section: 'Reports' },
  { label: 'Commission Report', icon: 'paid', route: '/admin/reports/commissions', section: 'Reports' },
  { label: 'Revenue Report', icon: 'trending_up', route: '/admin/reports/revenue', section: 'Reports' },
  { label: 'Settlement Report', icon: 'handshake', route: '/admin/reports/settlement', section: 'Reports' },
  { label: 'Roles', icon: 'badge', route: '/admin/user-management/roles', section: 'User Management' },
  { label: 'Users', icon: 'group', route: '/admin/user-management/users', section: 'User Management' },
];

const ICON_SVG: Record<string, string> = {
  'dashboard':       `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>`,
  'people_outline':  `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>`,
  'tune':            `<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>`,
  'person_add_alt':  `<path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>`,
  'assessment':      `<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>`,
  'contact_phone':   `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>`,
  'currency_exchange':`<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>`,
  'payments':        `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>`,
  'alt_route':       `<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>`,
  'receipt_long':    `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>`,
  'security':        `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>`,
  'gavel':           `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"/>`,
  'dataset':         `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>`,
  'account_balance': `<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/>`,
  'summarize':       `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>`,
  'paid':            `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>`,
  'trending_up':     `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>`,
  'handshake':       `<path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3.15a1.575 1.575 0 0 0 3.15 0v-3.15Zm7.5 0a1.575 1.575 0 1 0-3.15 0v3.15a1.575 1.575 0 0 0 3.15 0v-3.15ZM15 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9.75 3h13.5a2.25 2.25 0 0 1 2.25 2.25v.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.75V18a2.25 2.25 0 0 1 2.25-2.25Z"/>`,
  'badge':           `<path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>`,
  'group':           `<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>`,
  'settings_cog':    `<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>`,
};

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  drawerOpen = true;
  sidenavOpened = true;
  searchQuery = '';
  showUserMenu = false;

  navItems: NavItem[] = [];
  filteredNavItems: NavItem[] = [];
  userName = 'Admin';
  userInitial = 'A';
  userRoleName = 'Admin';

  private sub?: Subscription;

  constructor(
    private auth: AuthStateService,
    private api: ApiService,
    private router: Router,
    private elRef: ElementRef,
    private sanitizer: DomSanitizer,
    public idleTimeout: IdleTimeoutService,
    public appSettings: AppSettingsService,
  ) { }

  ngOnInit(): void {
    // Load app settings once; makes them available to all child components/services
    this.appSettings.load();

    // Start session idle timeout tracking
    this.idleTimeout.start();

    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyBodyClass();
    this.filteredNavItems = [];

    // Set user display info
    const state = this.auth.snapshot;
    this.userName = state.fullName || 'Admin';
    this.userInitial = this.userName.charAt(0).toUpperCase();
    this.userRoleName = state.roles.includes('SystemAdmin') ? 'Super Admin' : (state.roles[0] || 'Admin');

    // React to privilege changes
    this.sub = this.auth.authState$.subscribe(s => {
      this.buildNavItems(s.roles, s.privileges);
    });

    // Fetch privileges if not loaded yet
    if (this.auth.privileges.length === 0 && this.auth.isAuthenticated) {
      this.api.getPrivileges().subscribe(res => {
        if (res?.success && res.data) {
          this.auth.setPrivileges(res.data);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.idleTimeout.stop();
  }

  /** Close user dropdown when clicking outside */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.showUserMenu) {
      const target = event.target as HTMLElement;
      const userMenuEl = this.elRef.nativeElement.querySelector('.user-menu-container');
      if (userMenuEl && !userMenuEl.contains(target)) {
        this.showUserMenu = false;
      }
    }
  }

  getIconSvg(iconName: string): SafeHtml {
    const svg = ICON_SVG[iconName] || ICON_SVG['dashboard'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private buildNavItems(roles: string[], privileges: any[]): void {
    const isSystemAdmin = roles.includes('SystemAdmin');

    if (isSystemAdmin) {
      // SystemAdmin sees everything
      this.navItems = [...ALL_NAV_ITEMS];
    } else if (privileges.length > 0) {
      // Show only menus the user has permission for
      const allowedUrls = new Set(privileges.map((p: any) => p.url));
      this.navItems = ALL_NAV_ITEMS.filter(item => allowedUrls.has(item.route));
    } else {
      // Privileges not loaded yet — show only Dashboard until loaded
      this.navItems = [];
    }
  }

  // Get unique ordered sections for the template
  get sections(): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const item of this.navItems) {
      if (item.section && !seen.has(item.section)) {
        seen.add(item.section);
        result.push(item.section);
      }
    }
    return result;
  }

  getItemsForSection(section: string): NavItem[] {
    return this.navItems.filter(item => item.section === section);
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
    this.applyBodyClass();
  }

  onSearchChange(): void {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredNavItems = [];
      return;
    }
    this.filteredNavItems = this.navItems.filter(item =>
      item.label.toLowerCase().includes(q) ||
      (item.section || '').toLowerCase().includes(q)
    );
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filteredNavItems = [];
  }

  logout(): void {
    this.idleTimeout.stop();
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  private applyBodyClass(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
