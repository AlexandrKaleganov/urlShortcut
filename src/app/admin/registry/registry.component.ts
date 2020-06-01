import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  isShowVisible = false;
  users?: User;

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder, protected authService: AuthService) {
  }

  regForm = this.fb.group({
    domain: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  registry() {
    console.log(this.regForm.get('domain').value);
    this.authService.registry(this.regForm.get('domain').value).subscribe(res => {
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
