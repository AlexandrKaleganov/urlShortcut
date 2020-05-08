import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {Authority} from '../../shared/models/authority.model';
import {Observable} from 'rxjs';
import {AuthToken} from '../../shared/models/auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = GLOBAL_URL + '/api/user/';
  authToken: string = null;
  currentUser: string = null;

  constructor(private http: HttpClient) {
  }

  signIn(user: Authority): Observable<HttpResponse<AuthToken>> {
    return this.http.post<AuthToken>(this.url + 'login', user, {observe: 'response'});
  }

  registry(url: string): Observable<HttpResponse<Authority>> {
    return this.http.post<Authority>(this.url + 'registry', url, {observe: 'response'});
  }

  isAuth() {
    return this.authToken != null;
  }
}
