import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from '../../shared/models/users.model';

@Component({
  selector: 'app-show-registred-user',
  templateUrl: './show-registred-user.component.html',
  styleUrls: ['./show-registred-user.component.css']
})
export class ShowRegistredUserComponent implements OnInit {
  @Input() newUser: Users;
  @Output()
  eventEmitter: EventEmitter<Users> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.newUser);
  }

  login() {
    this.eventEmitter.emit(this.newUser);
  }
}
