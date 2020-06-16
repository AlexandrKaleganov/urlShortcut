import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {User} from '../../shared/models/user.model';
import {Observable} from 'rxjs';
import {AuthToken} from '../../shared/models/auth-token.model';
import {Role} from '../../shared/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  url: string = GLOBAL_URL + '/api/auth';
  authToken: string = null;
  currentUser: string = null;
  private principal: AuthToken = null;

  constructor(private http: HttpClient) {
  }

  ngOnDestroy(): void {
    this.clearJWTToken();
  }

  signIn(user: User): Observable<HttpResponse<AuthToken>> {
    return this.http.post<AuthToken>(this.url, user, {observe: 'response'});
  }

  registry(url: string): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.url + '/registry', url, {observe: 'response'});
  }

  getAuthority(): Observable<HttpResponse<Role[]>> {
    return this.http.get<Role[]>(this.url + '/roles/', {
      headers: {Authorization: `Bearer ${this.getCurrentToken()}`},
      observe: 'response'
    });
  }

  isAuth() {
    return sessionStorage.getItem('successToken') != null;
  }

  /**
   * получить текущий токен
   */
  getCurrentToken(): string {
    return sessionStorage.getItem('successToken');
  }
  getCurrentDomain() {
    return sessionStorage.getItem('domain');
  }
  getCurrentLogin() {
    return sessionStorage.getItem('currentLogin');
  }

  setPrincipal(auth: AuthToken) {
    this.principal = auth;
    sessionStorage.setItem('currentLogin', auth.username);
    sessionStorage.setItem('successToken', auth.jwtToken);
    sessionStorage.setItem('domain', auth.domain);
  }

  /**
   * очиска сессии
   */
  clearJWTToken() {
    this.principal = null;
    sessionStorage.clear();
  }

  isHasAnyAuthority(current: Role[], authorityes: string[] | string): boolean {
    let res = false;
    if (!this.isAuth()) {
      return false;
    }
    console.log('current = ');
    console.log(current);
    console.log('authorityes');
    console.log(authorityes);
    if (!Array.isArray(authorityes)) {
      authorityes = [authorityes];
    }
    current.forEach(auth => {
      if (authorityes.includes(auth.name)
      ) {
        res = true;
      }
    });
    console.log('вернуть = ' + res);
    return res;
  }

  hasAnyAuthority(authorityes: string[] | string): boolean {
    console.log('данный метод не реализован');
    if (!this.isAuth()) {
      return false;
    }
    if (!Array.isArray(authorityes)) {
      authorityes = [authorityes];
    }
    this.getAuthority().subscribe(res => {
      console.log(res);
    });
    if (this.principal != null) {
      return this.principal.roles.some((authority: string) => authorityes.includes(authority));
    }
    return true;
  }
}
