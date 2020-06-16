import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../core/auth/auth.service';
import {UrlService} from './url.service';
import {User} from '../../shared/models/user.model';
import {Role} from '../../shared/models/role.model';
import {Url} from '../../shared/models/url.model';
import {HttpParams} from '@angular/common/http';
import {CreateUserComponent} from '../user/create-user/create-user.component';
import {CreateUrlComponent} from './create-url/create-url.component';

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

  constructor(urlService: UrlService, public modalService: NgbModal, public authService: AuthService) {
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
    console.log(shortCut);
  }

  addNewUrl() {
   this.modalService.open(CreateUrlComponent, {size: 'lg', backdrop: 'static'});
  }

  showFilter() {
  }

  deleteFilters() {
  }
}
