import {Url} from './url.model';

export class Statistic {
  constructor(
    public id?: number,
    public url?: Url,
    public count?: number,
  ) {
  }
}
