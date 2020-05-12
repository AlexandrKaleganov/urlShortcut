import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegistryComponent } from './registry/registry.component';
import { ShowRegistredUserComponent } from './show-registred-user/show-registred-user.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [LoginComponent, RegistryComponent, ShowRegistredUserComponent, ErrorComponent],
  entryComponents: [LoginComponent, RegistryComponent],
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
