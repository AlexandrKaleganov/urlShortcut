import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [StatisticComponent],
    imports: [
        CommonModule,
        StatisticRoutingModule,
        NgbPaginationModule
    ]
})
export class StatisticModule { }
