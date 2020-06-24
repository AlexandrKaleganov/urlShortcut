import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../core/guard/auth-guard.service';
import {StatisticComponent} from './statistic.component';


const routes: Routes = [
  {
    path: 'statisticList',
    component: StatisticComponent,
    data: {},
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule {
}
