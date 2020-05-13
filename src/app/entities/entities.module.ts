import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersModule} from './users/users.module';

const routes: Routes = [
  {
    path: 'usersList',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, UsersModule
  ]
})
export class EntitiesModule {
}
