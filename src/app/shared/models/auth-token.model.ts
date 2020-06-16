export class AuthToken {
  constructor(
    public jwtToken?: string,
    public username?: string,
    public roles?: string[],
    public domain?: string
  ) {
  }
}
