import {Injectable} from '@angular/core';
import {GLOBAL_URL} from '../../shared/constant/url.constant';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {AuthService} from '../../core/auth/auth.service';
import {Observable} from 'rxjs';
import {PageStatistic} from '../../shared/models/page-statistic.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private rootUrl: string = GLOBAL_URL + '/api';
  private url: string = GLOBAL_URL + '/api/statistic';

  constructor(private http: HttpClient, protected authService: AuthService) {
  }

  findAll(options: HttpParams): Observable<HttpResponse<PageStatistic>> {
    console.log(this.authService.getCurrentToken());
    return this.http.get<PageStatistic>(this.url, {
      params: options,
      headers: {Authorization: `Bearer ${this.authService.getCurrentToken()}`},
      observe: 'response'
    });
  }
}
