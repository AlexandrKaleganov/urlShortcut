import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UrlRoutingModule} from './url-routing.module';
import {UrlComponent} from './url.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUrlComponent} from './create-url/create-url.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminModule} from '../../admin/admin.module';


@NgModule({
  declarations: [UrlComponent, CreateUrlComponent],
  entryComponents: [CreateUrlComponent],
  imports: [
    CommonModule,
    UrlRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    AdminModule
  ]
})
export class UrlModule {
}
