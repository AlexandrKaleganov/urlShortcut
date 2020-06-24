import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/auth/auth.service';
import {UrlService} from '../url.service';
import {Url} from '../../../shared/models/url.model';
import {HttpResponse} from '@angular/common/http';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css']
})
export class CreateUrlComponent implements OnInit, OnDestroy {
  urlService: UrlService;
  url: Url;
  userService: UserService;
  currentDomain: string;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              urlService: UrlService, public authService: AuthService, userService: UserService) {
    this.urlService = urlService;
    this.url = new Url();
    this.userService = userService;
  }

  editForm = this.fb.group({
    url: [null, [Validators.required]],
  });

  ngOnInit() {
    this.userService.findUserByLogin(this.authService.getCurrentLogin()).subscribe(res => {
      this.currentDomain = res.body.domain;
      this.updateEditForm();
    });
  }

  clear() {
    this.activeModal.close();
  }

  save() {
    console.log('сохраняем урл');
    console.log(this.editForm.get('url').value);
    if (this.editForm.get('url').value !== 'https://' + this.currentDomain + '/') {
      this.urlService.save(this.editForm.get('url').value).subscribe(res => {
        this.saveResult(res);
      });
    }
  }

  updateEditForm() {
    if (this.currentDomain) {
      this.editForm.patchValue({
        url: 'https://' + this.currentDomain + '/',
      });
    }
  }

  saveResult(res: HttpResponse<any>) {
    if (res.body.errorMessage) {
      this.url.errorMessage = res.body.errorMessage;
    } else {
      console.log(res.body);
      this.activeModal.close({
        res: true
      });
    }
  }

  closeError() {
    this.url.errorMessage = null;
  }

  ngOnDestroy(): void {
    this.url = new Url();
  }

}
