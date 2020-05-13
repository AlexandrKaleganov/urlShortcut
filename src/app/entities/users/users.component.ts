import {Component, OnInit} from '@angular/core';
import {Users} from '../../shared/models/users.model';
import {UsersService} from './users.service';
import {HttpParams} from '@angular/common/http';
import {ITEMS_PER_PAGE} from '../../shared/constant/page.constant';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Users[];
  usersService: UsersService;
  page = 0;
  itemsPerPage = ITEMS_PER_PAGE;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(page?: number) {
    const pageToLoad: number = page ? page : this.page;
    let options: HttpParams = new HttpParams();
    if (pageToLoad !== undefined) {
      options = options.set('pageable', (pageToLoad - 1).toString());
    }
    options = options.set('size', this.itemsPerPage.toString());
    this.usersService.findAll(options).subscribe(res => {
      this.userList = res.body;
      console.log(this.userList);
    });
  }

  delete(user: Users): void {
    console.log(user);
  }

  edit(user: Users) {
    console.log(user);
  }
}
