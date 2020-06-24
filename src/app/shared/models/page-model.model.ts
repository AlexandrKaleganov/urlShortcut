export class PageModel<E> {
  constructor(
    public content?: E[],
    public total?: number,
    public totalElements?: number,
  ) {
  }
}

