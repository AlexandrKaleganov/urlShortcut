import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
  }
  // regForm = this.fb.group({
  //   login: [null, ]
  //   url: [null, [Validators.required]]
  // });

  ngOnInit() {
  }

  clear() {
    this.activeModal.dismiss();
  }
}
