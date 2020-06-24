import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user.model';
import {AuthService} from '../../core/auth/auth.service';
import {Role} from '../../shared/models/role.model';
import {log} from 'util';
import {PageModel} from '../../shared/models/page-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootUrl: string = GLOBAL_URL + '/api';
  private url: string = GLOBAL_URL + '/api/users';

  constructor(private http: HttpClient, protected authService: AuthService) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageModel<User>>> {
    console.log(this.authService.getCurrentToken());
    return this.http.get<PageModel<User>>(this.url, {
      params: options,
      headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
      observe: 'response'
    });
  }

  save(options: User): Observable<HttpResponse<User>> {
    console.log(this.authService.getCurrentToken());
    return this.http.post<User>(this.url, options,
      {
        headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
        observe: 'response'
      });
  }

  update(options: User): Observable<HttpResponse<User>> {
    console.log(this.authService.getCurrentToken());
    return this.http.put<User>(this.url, options,
      {
        headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
        observe: 'response'
      });
  }

  /**
   * получить список ролей
   */
  getAllRoles(): Observable<HttpResponse<Role[]>> {
    return this.http.get<Role[]>(this.rootUrl + '/roles', {
      headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
      observe: 'response'
    });
  }

  findUserByLogin(login: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.url + '/' + login, {
      headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
      observe: 'response'
    });
  }
}
