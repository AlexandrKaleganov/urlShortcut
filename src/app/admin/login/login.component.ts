import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage?: string;

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder,
              protected authService: AuthService) {
  }

  loginForm = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.createUser()).subscribe(res => {
      this.authService.setPrincipal(res.body);
      console.log(this.authService.getCurrentToken());
      this.activeModal.dismiss();
    }, error => {
      this.errorMessage = 'Не верный логин или пароль';
    });
  }

  createUser(): User {
    return new User(null, this.loginForm.get('login').value, this.loginForm.get('password').value);
  }

  closeError() {
    this.errorMessage = null;
  }

  clear() {
    this.activeModal.dismiss();
  }

}
