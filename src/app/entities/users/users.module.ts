import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {RolesPipe} from '../../shared/pipe/roles.pipe';
import {RolesNamePipe} from '../../shared/pipe/roles-name.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserComponent} from './create-user/create-user.component';
import {AuthorityDirective} from '../../shared/directive/authority.directive';


@NgModule({
  declarations: [UsersComponent, RolesPipe,
    RolesNamePipe,
    CreateUserComponent, AuthorityDirective
  ],
  entryComponents: [CreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbModule,
  ],
  exports: [AuthorityDirective
  ]
})
export class UsersModule {
}
