import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuardFunctional = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const token: boolean = cookieService.check('_user_token');
    if (!token) {
      router.navigate(['/', 'auth']);
    }
    return token;
  } catch (e) {
    console.log(e);
    return false;
  }
};
