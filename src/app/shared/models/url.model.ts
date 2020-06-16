import {User} from './user.model';

export class Url {
  constructor(
    public id?: number,
    public origin?: string,
    public shortCut?: string,
    public user?: User,
    public errorMessage?: string
  ) {
  }
}
