import {Component, OnInit} from '@angular/core';
import {Users} from '../../shared/models/users.model';
import {UsersService} from './users.service';
import {HttpParams} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserComponent} from './create-user/create-user.component';
import {AuthService} from '../../core/auth/auth.service';
import {Roles} from '../../shared/models/roles.model';
import {HashAuthorityService} from '../../core/hash-authority.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Users[];
  usersService: UsersService;
  totalItems: number;
  itemsPerPage = 10;
  page = 1;
  currentRoles: Roles[];

  constructor(usersService: UsersService, public modalService: NgbModal, public hashAuthorityService: HashAuthorityService) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.loadPage();
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
    this.usersService.findAll(options).subscribe(res => {
      this.userList = res.body;
      this.totalItems = Number(res.headers.get('totalSize'));
      console.warn(this.totalItems);
    });
  }

  addNewUser() {
    const modelRef = this.modalService.open(CreateUserComponent, {size: 'md', backdrop: 'static'});
  }

  delete(user: Users): void {
    console.log(user);
  }

  edit(user: Users) {
    console.log(user);
  }

  showFilter() {
    console.log('не реализовано');
  }

  deleteFilters() {
    console.log('не реализовано');
  }
}
