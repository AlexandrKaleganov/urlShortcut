import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from './user/user.module';

const routes: Routes = [
  {
    path: 'usersList',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, UserModule
  ]
})
export class EntitiesModule {
}
