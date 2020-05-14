import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Users} from '../../shared/models/users.model';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  isShowVisible = false;
  users?: Users;

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder, protected authService: AuthService) {
  }

  regForm = this.fb.group({
    url: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  registry() {
    console.log(this.regForm.get('url').value);
    this.authService.registry(this.regForm.get('url').value).subscribe(res => {
      console.log(res.body);
      this.users = res.body;
      if (this.users.login !== null) {
        this.isShowVisible = true;
      }
    });
  }

  closeError() {
    this.users.errorMessage = null;
  }

  clear() {
    this.activeModal.dismiss();
  }

  login($event) {
    this.authService.signIn($event).subscribe(res => {
      this.authService.setPrincipal(res.body);
      this.activeModal.dismiss();
    }, error => {
      if (this.users) {
        this.users.errorMessage = 'Не удалось пройти авторизацию';
      }
    });
  }
}
