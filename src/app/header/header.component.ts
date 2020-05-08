import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../admin/login/login.component';
import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public modalService: NgbModal,  public authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  login() {
    const modelRef = this.modalService.open(LoginComponent, {size: 'lg', backdrop: 'static'});
  }
  logout() {
    this.authService.authToken = null;
  }
}
