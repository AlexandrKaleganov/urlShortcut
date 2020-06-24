import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UrlRoutingModule} from './url-routing.module';
import {UrlComponent} from './url.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUrlComponent} from './create-url/create-url.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminModule} from '../../admin/admin.module';
import {UserModule} from '../user/user.module';
import { UrlRedirectComponent } from './url-redirect/url-redirect.component';
import { UrlFilterComponent } from './url-filter/url-filter.component';


@NgModule({
  declarations: [UrlComponent, CreateUrlComponent, UrlRedirectComponent, UrlFilterComponent],
  entryComponents: [CreateUrlComponent, UrlRedirectComponent, UrlFilterComponent],
    imports: [
        CommonModule,
        UrlRoutingModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        AdminModule, UserModule, FormsModule
    ]
})
export class UrlModule {
}
