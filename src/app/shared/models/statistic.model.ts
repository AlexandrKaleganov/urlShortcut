import {Url} from './url.model';

export class Statistic {
  constructor(
    public id?: number,
    public urlDTO?: Url,
    public count?: number,
  ) {
  }
}
