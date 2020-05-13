import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';

@Directive({
  selector: '[appAuthority]'
})
export class AuthorityDirective {
  authorities: string[] = [];

  @Input()
  set appAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value] : value;

  }

  hashAuthority() {
    this.viewContainerRef.clear();
    if (this.authService.isAuth()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              public authService: AuthService) {
  }

  private updateView(): void {
    const hasAnyAuthority = this.authService.hasAnyAuthority(this.authorities);
    this.viewContainerRef.clear();
    if (hasAnyAuthority) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
