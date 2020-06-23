import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {UrlService} from '../url.service';
import {Url} from '../../../shared/models/url.model';

@Component({
  selector: 'app-url-redirect',
  templateUrl: './url-redirect.component.html',
  styleUrls: ['./url-redirect.component.css']
})
export class UrlRedirectComponent implements OnInit, OnDestroy {
  urlService: UrlService;
  url: Url;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              urlService: UrlService) {
    this.urlService = urlService;
    this.url = new Url();
  }

  editForm = this.fb.group({
    shortCut: [null, [Validators.required]],
  });

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }

  redirect() {
    this.urlService.getUrlByShortCut(this.editForm.get('shortCut').value).subscribe(res => {
      if (!res.body.errorMessage) {
        window.open(res.body.origin);
      } else {
        this.url.errorMessage = res.body.errorMessage;
      }
    });
  }

  ngOnDestroy(): void {
    this.url.errorMessage = null;
  }

  closeError() {
    this.url.errorMessage = null;
  }
}
