import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-url-filter',
  templateUrl: './url-filter.component.html',
  styleUrls: ['./url-filter.component.css']
})
export class UrlFilterComponent implements OnInit {
  loginFilter: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  filter() {
    this.activeModal.close({
      loginFilter: this.loginFilter,
    });
  }
}
