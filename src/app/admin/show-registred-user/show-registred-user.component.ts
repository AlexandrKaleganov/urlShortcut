import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../shared/models/users.model';

@Component({
  selector: 'app-show-registred-user',
  templateUrl: './show-registred-user.component.html',
  styleUrls: ['./show-registred-user.component.css']
})
export class ShowRegistredUserComponent implements OnInit {
  @Input() newUser: Users;

  constructor() {
  }

  ngOnInit() {
    console.log(this.newUser);
  }

}
