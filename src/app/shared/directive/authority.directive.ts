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

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>, public authService: AuthService) {
  }

  // private updateView() {
  //   const hasAnyAuthority = this.authService.hasAnyAuthority(this.authorities);
  //   if (hasAnyAuthority) {
  //     this.viewContainer.createEmbeddedView(this.template);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
}
