import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {AuthGuardService} from '../../core/guard/auth-guard.service';


const routes: Routes = [
  { path: 'usersList',
    component: UsersComponent,
    data: {
    },
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
