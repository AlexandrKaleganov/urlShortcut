import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {Observable} from 'rxjs';
import {Users} from '../../shared/models/users.model';
import {AuthService} from '../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = GLOBAL_URL + '/api/users';

  constructor(private http: HttpClient, protected authService: AuthService) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<Users[]>> {
    console.log(this.authService.getPrincipal());
    return this.http.get<Users[]>(this.url, {
      params: options,
      headers: {Authorization: `Bearer ${this.authService.getPrincipal()}`},
      observe: 'response'
    });
  }

  save(options: Users): Observable<HttpResponse<Users>> {
    console.log(this.authService.getPrincipal());
    return this.http.post<Users>(this.url, options,
      {
        headers: {Authorization: `Bearer ${this.authService.getPrincipal()}`},
        observe: 'response'
      });
  }
  update(options: Users): Observable<HttpResponse<Users>> {
    console.log(this.authService.getPrincipal());
    return this.http.put<Users>(this.url, options,
      {
        headers: {Authorization: `Bearer ${this.authService.getPrincipal()}`},
        observe: 'response'
      });
  }
}
