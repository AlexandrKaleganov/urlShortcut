import {Component, Inject, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../core/auth/auth.service';
import {UrlService} from './url.service';
import {Role} from '../../shared/models/role.model';
import {Url} from '../../shared/models/url.model';
import {HttpParams} from '@angular/common/http';
import {CreateUrlComponent} from './create-url/create-url.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  urlList: Url[];
  urlService: UrlService;
  totalItems: number;
  itemsPerPage = 20;
  page = 1;
  loginFilter: string;
  currentRoles: Role[];

  constructor(urlService: UrlService,
              public modalService: NgbModal,
              public authService: AuthService) {
    this.urlService = urlService;
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
    if (this.loginFilter) {
      options = options.set('login', this.loginFilter);
    }
    this.urlService.findAll(options).subscribe(res => {
      console.log(res);
      this.urlList = res.body.content;
      this.totalItems = res.body.totalElements;
      console.warn(this.totalItems);
    });
  }

  redirect(shortCut: string) {
    this.urlService.getUrlByShortCut(shortCut).subscribe(res => {
      window.open(res.body.origin);
    });
  }

  addNewUrl() {
    this.modalService.open(CreateUrlComponent, {size: 'lg', backdrop: 'static'});
  }

  showFilter() {
  }

  deleteFilters() {
  }
}
