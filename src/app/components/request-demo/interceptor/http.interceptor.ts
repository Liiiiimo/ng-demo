import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  switchMap,
  tap,
  throwError,
  timeout,
} from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  refreshToken$: BehaviorSubject<any> | undefined;

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = this.handleHeader(request);
    return next.handle(req).pipe(
      timeout(30000),
      tap(() => {}),
      catchError((error: HttpErrorResponse, caught: Observable<any>) => {
        if (error.status === 400 || error.status === 401) {
          if (this.refreshToken$) {
            return this.refreshToken$.pipe(
              filter((resp) => !!resp),
              switchMap((r) => next.handle(this.handleHeader(req))),
              catchError((err) => throwError(() => err))
            );
          } else {
            this.refreshToken$ = new BehaviorSubject<any>(null);
            // refresh token
            return this.authService.getRefreshToken().pipe(
              tap((resp) => {
                this.refreshToken$!.next(true);
                this.refreshToken$ = undefined;
                return next.handle(this.handleHeader(req));
              }),
              catchError((err) => {
                this.refreshToken$!.next(false);
                this.refreshToken$ = undefined;
                return throwError(() => err);
              })
            );
          }
        }
        return throwError(() => error);
      })
    );
  }

  handleHeader(request: HttpRequest<any>): HttpRequest<any> {
    const header: any = {
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    };

    // not login/logout, add the Authorization header
    if (!request.url.includes('/auth/token')) {
      const auth = this.authService.getAuthorization; //get Authorization
      header.Authorization = auth;
    }

    request.clone({
      setHeaders: header,
    });
    return request;
  }
}
