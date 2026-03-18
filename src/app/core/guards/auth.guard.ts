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
      router.navigate(['/unauthorized']);
      return false;
    }
  }

  return true;
};
