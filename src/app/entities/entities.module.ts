import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserModule} from './user/user.module';
import {UrlModule} from './url/url.module';
import {StatisticModule} from './statistic/statistic.module';

const routes: Routes = [
  {
    path: 'usersList',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'urlList',
    loadChildren: () => import('./url/url.module').then(m => m.UrlModule)
  },
  {
    path: 'statisticList',
    loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule, UserModule, UrlModule, StatisticModule
  ]
})
export class EntitiesModule {
}
