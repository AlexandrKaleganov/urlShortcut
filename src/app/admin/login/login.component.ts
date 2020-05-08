import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder,
  ) {
  }
  loginForm = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  login() {
    console.log('вели логин');
  }

  clear() {
    this.activeModal.dismiss();
  }

}
