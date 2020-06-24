import { Component, OnInit } from '@angular/core';
import {Url} from '../../shared/models/url.model';
import {UrlService} from '../url/url.service';
import {Role} from '../../shared/models/role.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../core/auth/auth.service';
import {HttpParams} from '@angular/common/http';
import {CreateUrlComponent} from '../url/create-url/create-url.component';
import {Statistic} from '../../shared/models/statistic.model';
import {StatisticService} from './statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  statisticList: Statistic[];
  statisticService: StatisticService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  currentRoles: Role[];

  constructor(statisticService: StatisticService,
              public modalService: NgbModal,
              public authService: AuthService) {
    this.statisticService = statisticService;
  }

  ngOnInit() {
    this.authService.getAuthority().subscribe(res => {
      this.currentRoles = res.body;
      this.loadPage();
    });
  }

  loadPage(page?: number) {
    const pageToLoad: number = page ? page : this.page;
    console.log(pageToLoad);
    let options: HttpParams = new HttpParams();
    if (pageToLoad !== undefined) {
      options = options.set('page', (pageToLoad - 1).toString());
    }
    options = options.set('size', this.itemsPerPage.toString());
    options = options.set('sort', 'id');
    this.statisticService.findAll(options).subscribe(res => {
      console.log('выводим статистику');
      console.log(res.body.content);
      this.statisticList = res.body.content;
      this.totalItems = res.body.totalElements;
      console.warn(this.totalItems);
    });
  }
}
