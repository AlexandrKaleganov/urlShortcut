import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.css']
})
export class FilterUserComponent implements OnInit {
  loginFilter: string;
  urlFilter: string;
  firstNameFilter: string;

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
      firstNameFilter: this.firstNameFilter,
      urlFilter: this.urlFilter
    });
  }
}
