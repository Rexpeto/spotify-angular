import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authorizationInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const cookieService = inject(CookieService);
  try {
    const token = cookieService.get('_user_token');
    let newRequest = req;

    newRequest = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    return next(newRequest);
  } catch (e) {
    console.log(e);
    return next(req);
  }
};
