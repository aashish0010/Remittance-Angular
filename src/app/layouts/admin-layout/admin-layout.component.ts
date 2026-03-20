import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

interface NavItem {
  label: string;
  icon: string;
  route: string;
  section?: string;
}

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
export class AdminLayoutComponent implements OnInit {
  isDarkMode = false;
  drawerOpen = true;
  sidenavOpened = true;
  searchQuery = '';

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
    { label: 'Agents', icon: 'people_outline', route: '/admin/agents', section: 'Agent Management' },
    { label: 'System Setup', icon: 'tune', route: '/admin/setup', section: 'Agent Management' },
    { label: 'Register Customer', icon: 'person_add_alt', route: '/admin/customer-register', section: 'Customers' },
    { label: 'Customer Report', icon: 'assessment', route: '/admin/customer-report', section: 'Customers' },
    { label: 'Receivers', icon: 'contact_phone', route: '/admin/receivers', section: 'Operations' },
    { label: 'Exchange Rates', icon: 'currency_exchange', route: '/admin/rates', section: 'Operations' },
    { label: 'Commissions', icon: 'payments', route: '/admin/commissions', section: 'Operations' },
    { label: 'Routing', icon: 'alt_route', route: '/admin/routing', section: 'Operations' },
    { label: 'Transactions', icon: 'receipt_long', route: '/admin/transactions', section: 'Operations' },
    { label: 'Compliance Setup', icon: 'tune', route: '/admin/compliance-setup', section: 'Compliance' },
    { label: 'Compliance Alerts', icon: 'security', route: '/admin/compliance', section: 'Compliance' },
    { label: 'Agent Statement', icon: 'account_balance', route: '/admin/reports/agent-statement', section: 'Reports' },
    { label: 'Transaction Report', icon: 'summarize', route: '/admin/reports/transactions', section: 'Reports' },
    { label: 'Commission Report', icon: 'paid', route: '/admin/reports/commissions', section: 'Reports' },
    { label: 'Revenue Report', icon: 'trending_up', route: '/admin/reports/revenue', section: 'Reports' },
    { label: 'Settlement Report', icon: 'handshake', route: '/admin/reports/settlement', section: 'Reports' },
  ];

  filteredNavItems: NavItem[] = [];

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyBodyClass();
    this.filteredNavItems = [];
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

  private applyBodyClass(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
