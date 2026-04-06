import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NavItem {
  label: string;
  svgPath: string;
  route: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>',
    route: '/customer/dashboard',
  },
  {
    label: 'Send Money',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>',
    route: '/customer/send',
  },
  {
    label: 'My Transactions',
    svgPath: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
    route: '/customer/transactions',
  },
];

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  isDarkMode = false;
  sidenavOpened = false;          // closed by default on mobile
  showUserMenu = false;

  navItems: NavItem[] = NAV_ITEMS;
  userName = 'Customer';
  userInitial = 'C';

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyBodyClass();

    // Open sidebar by default on large screens
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      this.sidenavOpened = true;
    }
  }

  /** Close user dropdown when clicking outside */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.showUserMenu) {
      const target = event.target as HTMLElement;
      const menuEl = this.elRef.nativeElement.querySelector('.user-menu-container');
      if (menuEl && !menuEl.contains(target)) {
        this.showUserMenu = false;
      }
    }
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode));
    this.applyBodyClass();
  }

  logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  private applyBodyClass(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
