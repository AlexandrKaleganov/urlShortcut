import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/auth/auth.service';
import {UrlService} from '../url.service';
import {Url} from '../../../shared/models/url.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css']
})
export class CreateUrlComponent implements OnInit {
  urlService: UrlService;
  url: Url;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              urlService: UrlService, public authService: AuthService) {
    this.urlService = urlService;
    this.url = new Url();
  }

  editForm = this.fb.group({
    url: [null, [Validators.required]],
  });

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

  save() {
    console.log('сохраняем урл');
    console.log(this.editForm.get('url').value);
    this.urlService.save(this.editForm.get('url').value).subscribe(res => {
        this.saveResult(res);
      }
    );

  }

  saveResult(res: HttpResponse<any>) {
    if (res.body.errorMessage) {
      this.url.errorMessage = res.body.errorMessage;
    } else {
      console.log(res.body);
      this.activeModal.close();
    }
  }

  closeError() {
    this.url.errorMessage = null;
  }

}
