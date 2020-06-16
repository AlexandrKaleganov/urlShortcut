import {Url} from './url.model';

export class PageUrl {
  constructor(
    public content?: Url[],
    public total?: number,
    public totalElements?: number,
  ) {
  }
}
