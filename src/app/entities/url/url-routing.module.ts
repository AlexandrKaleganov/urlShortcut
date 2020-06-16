import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {AuthGuardService} from '../../core/guard/auth-guard.service';
import {UrlComponent} from './url.component';

const routes: Routes = [
  { path: 'urlList',
    component: UrlComponent,
    data: {
    },
    canActivate: [AuthGuardService],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlRoutingModule { }
