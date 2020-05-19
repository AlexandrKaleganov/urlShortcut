import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {Users} from '../../../shared/models/users.model';
import {UsersService} from '../users.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  users: Users = new Users();
  usersService: UsersService;


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, usersService: UsersService) {
    this.usersService = usersService;
  }

  editForm = this.fb.group({
    id: [null],
    login: [null, [Validators.required]],
    pwd: [null],
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    middleName: [null, [Validators.required]],
    url: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

  save() {
    const user = this.updateUser();
    if (!user.id) {
      this.usersService.save(user).subscribe(res => {
          this.saveResult(res);
        }
      );
    } else {
      this.usersService.update(user).subscribe(res => {
          this.saveResult(res);
        }
      );
    }
  }

  saveResult(res: HttpResponse<any>) {
    if (res.body.errorMessage) {
      this.users.errorMessage = res.body.errorMessage;
    } else {
      console.log(res.body);
      this.activeModal.close();
    }
  }

  updateUser(): Users {
    return {
      ...new Users(),
      id: Number(this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null),
      login: this.editForm.get(['login']).value,
      pwd: this.editForm.get(['pwd']).value,
      lastName: this.editForm.get(['lastName']).value,
      firstName: this.editForm.get(['firstName']).value,
      middleName: this.editForm.get(['middleName']).value,
      url: this.editForm.get(['url']).value,
    };
  }

  closeError() {
    this.users.errorMessage = null;
  }
}
