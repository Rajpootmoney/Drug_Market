import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  debugger;
  let authservice = inject(LoginService);
  let routerService = inject(Router);

  if (!authservice.isLoggedIn()) {
    routerService.navigate(['Login']);
  }
  return true;
};
