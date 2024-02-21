import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authorization: string = '';

  constructor() {}

  getRefreshToken(): Observable<any> {
    return of({});
  }

  getAuthorization() {
    return this._authorization;
  }
}
