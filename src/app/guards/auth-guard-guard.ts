import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);

  return _authService.isloggedin();
};
