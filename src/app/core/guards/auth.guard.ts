import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  if (!authState.isAuthenticated) {
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // Check required roles if specified in route data
  const requiredRoles: string[] | undefined = route.data?.['roles'];
  if (requiredRoles && requiredRoles.length > 0) {
    const userRoles = authState.roles;
    const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));
    if (!hasRequiredRole) {
      router.navigate(['/admin/dashboard']);
      return false;
    }
  }

  // Check menu-based access for admin routes
  const url = state.url.split('?')[0]; // strip query params
  if (url.startsWith('/admin/') && url !== '/admin/dashboard') {
    // SystemAdmin can access everything
    if (authState.isSystemAdmin) return true;

    // If privileges are loaded, check access
    const privileges = authState.privileges;
    if (privileges.length > 0) {
      const hasAccess = privileges.some(p => p.url && url.startsWith(p.url));
      if (!hasAccess) {
        router.navigate(['/admin/dashboard']);
        return false;
      }
    }
    // If no privileges loaded yet, allow (will be enforced by backend)
  }

  return true;
};
