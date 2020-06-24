import {Statistic} from './statistic.model';

export class PageStatistic {
  constructor(
    public content?: Statistic[],
    public total?: number,
    public totalElements?: number,
  ) {
  }
}

