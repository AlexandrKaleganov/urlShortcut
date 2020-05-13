import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../admin/login/login.component';
import {AuthService} from '../core/auth/auth.service';
import {RegistryComponent} from '../admin/registry/registry.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: Router;
  constructor(public modalService: NgbModal,  protected authService: AuthService, route: Router
  ) {
    this.route = route;
  }

  ngOnInit() {
  }

  login(): void {
    const modelRef = this.modalService.open(LoginComponent, {size: 'md', backdrop: 'static'});
  }

  registry(): void {
    const modalRef = this.modalService.open(RegistryComponent, {size: 'md', backdrop: 'static'});
  }

  logout(): void {
    this.authService.principal = null;
    this.route.navigate(['']);
  }
}
