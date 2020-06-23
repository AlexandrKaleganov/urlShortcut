import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UrlRoutingModule} from './url-routing.module';
import {UrlComponent} from './url.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUrlComponent} from './create-url/create-url.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminModule} from '../../admin/admin.module';
import {UserModule} from '../user/user.module';
import { UrlRedirectComponent } from './url-redirect/url-redirect.component';


@NgModule({
  declarations: [UrlComponent, CreateUrlComponent, UrlRedirectComponent],
  entryComponents: [CreateUrlComponent, UrlRedirectComponent],
  imports: [
    CommonModule,
    UrlRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    AdminModule, UserModule
  ]
})
export class UrlModule {
}
