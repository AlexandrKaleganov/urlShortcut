import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../user.service';
import {HttpResponse} from '@angular/common/http';
import {Role} from '../../../shared/models/role.model';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  users: User = new User();
  usersService: UserService;
  rolesList: Role[];
  settings = {};
  private currentRoles: Role[];

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, usersService: UserService, public authService: AuthService) {
    this.usersService = usersService;
    this.initSettings();
  }

  editForm = this.fb.group({
    id: [null],
    login: [null, [Validators.required]],
    pwd: [null],
    roles: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    middleName: [null, [Validators.required]],
    domain: [null, [Validators.required]]
  });

  ngOnInit() {
    this.getAllRoles();
  }

  init() {
    this.editForm.patchValue({
      id: this.users.id,
      login: this.users.login,
      pwd: null,
      roles: this.users.roles,
      lastName: this.users.lastName,
      firstName: this.users.firstName,
      middleName: this.users.middleName,
      domain: this.users.domain
    });
  }

  clear() {
    this.activeModal.dismiss();
  }

  save() {
    const user = this.updateUser();
    console.log('сохраняем пользователя');
    console.log(user);
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

  updateUser(): User {
    return {
      ...new User(),
      id: Number(this.editForm.get(['id']).value ? this.editForm.get(['id']).value : null),
      login: this.editForm.get(['login']).value,
      pwd: this.editForm.get(['pwd']).value,
      lastName: this.editForm.get(['lastName']).value,
      firstName: this.editForm.get(['firstName']).value,
      middleName: this.editForm.get(['middleName']).value,
      domain: this.editForm.get(['domain']).value,
      roles: this.editForm.get(['roles']).value
    };
  }

  /**
   * получить список ролей
   */
  getAllRoles() {
    if (this.authService.isHasAnyAuthority(this.currentRoles, ['ADMIN'])) {
      this.usersService.getAllRoles().subscribe(res => {
        this.rolesList = res.body;
      });
    } else {
      this.rolesList = this.currentRoles;
    }
  }

  closeError() {
    this.users.errorMessage = null;
  }

  private initSettings() {
    this.settings = {
      singleSelection: false,
      searchPlaceholderText: 'Поиск',
      placeholder: 'Выберете роли',
      text: 'Выберите роли',
      idField: 'id',
      textField: 'name',
      selectAllText: 'Выбрать все',
      unSelectAllText: 'Отменит выбор',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }

  ngOnDestroy(): void {
    this.users = new User();
  }
}
