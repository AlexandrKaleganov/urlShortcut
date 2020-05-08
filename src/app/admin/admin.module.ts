import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  imports: [
    NgbModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule {
}
