import {Role} from './role.model';

export class User {
  constructor(
    public id?: number,
    public login?: string,
    public pwd?: string,
    public lastName?: string,
    public firstName?: string,
    public middleName?: string,
    public url?: string,
    public errorMessage?: string,
    public roles?: Role[]
  ) {
  }
}
