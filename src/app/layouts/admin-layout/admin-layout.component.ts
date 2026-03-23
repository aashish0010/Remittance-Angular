import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { AuthStateService } from '../../core/services/auth-state.service';
import { ApiService } from '../../core/services/api.service';

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
  { label: 'Setup', icon: 'tune', route: '/admin/setup', section: 'Agent Management' },
  { label: 'Register', icon: 'person_add_alt', route: '/admin/customer-register', section: 'Customers' },
  { label: 'Report', icon: 'assessment', route: '/admin/customer-report', section: 'Customers' },
  { label: 'Receivers', icon: 'contact_phone', route: '/admin/receivers', section: 'Operations' },
  { label: 'Exchange Rates', icon: 'currency_exchange', route: '/admin/rates', section: 'Operations' },
  { label: 'Service Charges', icon: 'payments', route: '/admin/commissions', section: 'Operations' },
  { label: 'Routing', icon: 'alt_route', route: '/admin/routing', section: 'Operations' },
  { label: 'Transactions', icon: 'receipt_long', route: '/admin/transactions', section: 'Operations' },
  { label: 'Setup', icon: 'tune', route: '/admin/compliance-setup', section: 'Compliance' },
  { label: 'Alerts', icon: 'security', route: '/admin/compliance', section: 'Compliance' },
  { label: 'Static Values', icon: 'dataset', route: '/admin/static-values', section: 'System' },
  { label: 'Agent Statement', icon: 'account_balance', route: '/admin/reports/agent-statement', section: 'Reports' },
  { label: 'Transaction Report', icon: 'summarize', route: '/admin/reports/transactions', section: 'Reports' },
  { label: 'Service Charge Report', icon: 'paid', route: '/admin/reports/commissions', section: 'Reports' },
  { label: 'Revenue Report', icon: 'trending_up', route: '/admin/reports/revenue', section: 'Reports' },
  { label: 'Settlement Report', icon: 'handshake', route: '/admin/reports/settlement', section: 'Reports' },
  { label: 'Roles', icon: 'badge', route: '/admin/user-management/roles', section: 'User Management' },
  { label: 'Users', icon: 'group', route: '/admin/user-management/users', section: 'User Management' },
];

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  drawerOpen = true;
  sidenavOpened = true;
  searchQuery = '';

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
  ) {}

  ngOnInit(): void {
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
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  private applyBodyClass(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
