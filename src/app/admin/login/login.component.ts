import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Users} from '../../shared/models/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage?: string;

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder,
              public authService: AuthService) {
  }

  loginForm = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.createUser()).subscribe(res => {
      this.authService.principal = res.body;
      console.log(this.authService.principal);
    });
  }

  createUser(): Users {
    return new Users(null, this.loginForm.get('login').value, this.loginForm.get('password').value);
  }

  clear() {
    this.activeModal.dismiss();
  }

}
