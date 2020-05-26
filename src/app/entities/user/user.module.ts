import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {RolesPipe} from '../../shared/pipe/roles.pipe';
import {RolesNamePipe} from '../../shared/pipe/roles-name.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserComponent} from './create-user/create-user.component';
import {AuthorityDirective} from '../../shared/directive/authority.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminModule} from '../../admin/admin.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { FilterUserComponent } from './filter-user/filter-user.component';


@NgModule({
  declarations: [UserComponent, RolesPipe,
    RolesNamePipe,
    CreateUserComponent, AuthorityDirective, FilterUserComponent
  ],
  entryComponents: [CreateUserComponent, FilterUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AdminModule,
    NgMultiSelectDropDownModule,
    FormsModule,
  ],
  exports: [AuthorityDirective
  ]
})
export class UserModule {
}
