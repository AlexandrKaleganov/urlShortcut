import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {Roles} from '../models/roles.model';

@Directive({
  selector: '[appAuthority]'
})
export class AuthorityDirective {
  roles: string[] = [];   // список ролей, который должны быть у пользователя
  authorities: Roles[];   // список ролей текущего пользователя

  @Input()
  set appAuthority(value: string | string[]) {
    console.log(value);
    this.roles = typeof value === 'string' ? [value] : value;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, public authService: AuthService) {
    this.authService.getAuthority().subscribe((res) => {
      this.authorities = res.body;
    });
  }

  isVisible(): boolean {
    this.viewContainerRef.clear();
    if (this.authorities) {
      if (this.authService.isHasAnyAuthority(this.authorities, this.roles)
      ) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      return false;
    }
  }
}
