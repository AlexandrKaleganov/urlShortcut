import {Roles} from './roles.model';

export class Users {
  constructor(
    public id?: number,
    public login?: string,
    public lastName?: string,
    public firstName?: string,
    public middleName?: string,
    public pwd?: string,
    public url?: string,
    public errorMessage?: string,
    public roles?: Roles[]
  ) {
  }
}
