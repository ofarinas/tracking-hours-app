import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

export const canActivate: CanActivateFn = async () => {
  const authService = inject(LoginService);
  const router = inject(Router);

  if (localStorage.getItem('isLogged')) return true;
  if (authService.isLogged) {
    localStorage.setItem('isLogged', 'true');
    return true;
  }

  await router.navigate(['login']);
  return false;
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);