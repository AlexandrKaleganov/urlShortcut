export class AuthToken {
  constructor(
    public token?: string,
    public username?: string,
    public roles?: string[]
  ) {
  }
}
