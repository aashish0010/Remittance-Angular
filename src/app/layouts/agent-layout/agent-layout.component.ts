import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppSettingsService } from '../../core/services/app-settings.service';
import { AuthStateService } from '../../core/services/auth-state.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  section?: string;
}

const NAV_ITEMS: NavItem[] = [
  // Top-level (no section)
  {
    label: 'Dashboard',
    icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
    route: '/agent/dashboard'
  },

  // Operations
  {
    label: 'Send Money',
    icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
    route: '/agent/send',
    section: 'Operations'
  },
  {
    label: 'My Transactions',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    route: '/agent/transactions',
    section: 'Operations'
  },

  // Reports
  {
    label: 'My Statement',
    icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z',
    route: '/agent/reports/statement',
    section: 'Reports'
  },

  // My Account
  {
    label: 'Profile & Settings',
    icon: 'M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    route: '/agent/profile',
    section: 'My Account'
  },
];

@Component({
  selector: 'app-agent-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agent-layout.component.html',
  styleUrls: ['./agent-layout.component.scss']
})
export class AgentLayoutComponent implements OnInit {
  isDarkMode = false;
  sidenavOpened = true;
  showUserMenu = false;

  userName = 'Agent';
  userInitial = 'A';
  userRoleName = 'Sending Agent';

  // Expandable section state (default: all expanded)
  sectionExpanded: Record<string, boolean> = {};

  navItems: NavItem[] = NAV_ITEMS;

  constructor(
    public appSettings: AppSettingsService,
    private auth: AuthStateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.appSettings.load();
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyBodyClass();

    try {
      const saved = localStorage.getItem('agentNavSections');
      this.sectionExpanded = saved ? JSON.parse(saved) : {};
    } catch { this.sectionExpanded = {}; }

    const state = this.auth.snapshot;
    this.userName = state.fullName || 'Agent';
    this.userInitial = this.userName.charAt(0).toUpperCase();
    this.userRoleName = state.roles[0] || 'Sending Agent';
  }

  // ── Section collapse/expand ──────────────────────────────────────────────

  toggleSection(section: string): void {
    this.sectionExpanded[section] = !this.isSectionExpanded(section);
    try {
      localStorage.setItem('agentNavSections', JSON.stringify(this.sectionExpanded));
    } catch { /* ignore */ }
  }

  isSectionExpanded(section: string): boolean {
    return this.sectionExpanded[section] !== false;
  }

  // ── Navigation helpers ─────────────────────────────────────────────────

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
    return this.navItems.filter(i => i.section === section);
  }

  get topLevelItems(): NavItem[] {
    return this.navItems.filter(i => !i.section);
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
    this.applyBodyClass();
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu-wrapper')) {
      this.showUserMenu = false;
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  private applyBodyClass(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
