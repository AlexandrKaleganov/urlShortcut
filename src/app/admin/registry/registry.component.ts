import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, protected fb: FormBuilder, public authService: AuthService) {
  }

  regForm = this.fb.group({
    url: [null, [Validators.required]]
  });

  ngOnInit() {
  }

  registry() {
    console.log(this.regForm.get('url').value);
    this.authService.registry(this.regForm.get('url').value).subscribe(res => {
      console.log(res.body);
    });
  }

  clear() {
    this.activeModal.dismiss();
  }
}
