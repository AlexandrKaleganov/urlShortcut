import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {Users} from '../../shared/models/users.model';
import {Observable} from 'rxjs';
import {AuthToken} from '../../shared/models/auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = GLOBAL_URL + '/api/auth';
  authToken: string = null;
  currentUser: string = null;
  principal: AuthToken = null;

  constructor(private http: HttpClient) {
  }

  signIn(user: Users): Observable<HttpResponse<AuthToken>> {
    return this.http.post<AuthToken>(this.url, user, {observe: 'response'});
  }

  registry(url: string): Observable<HttpResponse<Users>> {
    return this.http.post<Users>(this.url + '/registry', url, {observe: 'response'});
  }

  isAuth() {
    return this.principal != null;
  }
getPrincipal(): AuthToken {
    return this.principal;
}
  hasAnyAuthority(authorityes: string[] | string): boolean {
    console.log('данный метод не реализован');
    if (!this.isAuth()) {
      return false;
    }
    if (!Array.isArray(authorityes)) {
      authorityes = [authorityes];
    }
    return this.principal.roles.some((authority: string) => authorityes.includes(authority));
  }
}
