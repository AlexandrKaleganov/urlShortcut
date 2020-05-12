import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() errorMessage?: string;
  @Output() closeAlert = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clearMessage() {
    this.errorMessage = null;
    this.closeAlert.emit();
  }
}
