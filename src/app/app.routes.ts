import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Login (uses LoginLayout)
  {
    path: 'auth',
    loadComponent: () => import('./layouts/login-layout/login-layout.component').then(m => m.LoginLayoutComponent),
    children: [
      { path: 'login', loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent) },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  // Admin Portal
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
      { path: 'agents', loadComponent: () => import('./pages/admin/agent-management/agent-management.component').then(m => m.AgentManagementComponent) },
      { path: 'setup', loadComponent: () => import('./pages/admin/accounting/accounting.component').then(m => m.AccountingComponent) },
      { path: 'transactions', loadComponent: () => import('./pages/admin/transactions/admin-transactions.component').then(m => m.AdminTransactionsComponent) },
      { path: 'customer-register', loadComponent: () => import('./pages/admin/customer-register/customer-register.component').then(m => m.CustomerRegisterComponent) },
      { path: 'customer-report', loadComponent: () => import('./pages/admin/customer-report/customer-report.component').then(m => m.CustomerReportComponent) },
      { path: 'receivers', loadComponent: () => import('./pages/admin/receivers/receivers.component').then(m => m.ReceiversComponent) },
      { path: 'rates', loadComponent: () => import('./pages/admin/exchange-rates/exchange-rates.component').then(m => m.ExchangeRatesComponent) },
      { path: 'commissions', loadComponent: () => import('./pages/admin/commissions/commissions.component').then(m => m.CommissionsComponent) },
      { path: 'routing', loadComponent: () => import('./pages/admin/routing/routing.component').then(m => m.RoutingComponent) },
      { path: 'accounting', loadComponent: () => import('./pages/admin/accounting/accounting.component').then(m => m.AccountingComponent) },
      { path: 'compliance', loadComponent: () => import('./pages/admin/compliance/compliance.component').then(m => m.ComplianceComponent) },
      { path: 'compliance-setup', loadComponent: () => import('./pages/admin/compliance-setup/compliance-setup.component').then(m => m.ComplianceSetupComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  // Agent Portal
  {
    path: 'agent',
    loadComponent: () => import('./layouts/agent-layout/agent-layout.component').then(m => m.AgentLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/agent/dashboard/agent-dashboard.component').then(m => m.AgentDashboardComponent) },
      { path: 'send', loadComponent: () => import('./pages/agent/send-money/send-money.component').then(m => m.SendMoneyComponent) },
      { path: 'transactions', loadComponent: () => import('./pages/agent/transactions/agent-transactions.component').then(m => m.AgentTransactionsComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  // Customer Portal
  {
    path: 'customer',
    loadComponent: () => import('./layouts/customer-layout/customer-layout.component').then(m => m.CustomerLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/customer/dashboard/customer-dashboard.component').then(m => m.CustomerDashboardComponent) },
      { path: 'send', loadComponent: () => import('./pages/customer/send-money/customer-send.component').then(m => m.CustomerSendComponent) },
      { path: 'transactions', loadComponent: () => import('./pages/customer/transactions/customer-transactions.component').then(m => m.CustomerTransactionsComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  // Default redirect
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];
