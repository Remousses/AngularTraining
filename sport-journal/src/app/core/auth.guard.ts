import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const translateService = inject(TranslateService);
  console.log('ok');
  
  if (authService.isLogged) {
    return true;
  } else {
    return router.parseUrl('');
  }
};
