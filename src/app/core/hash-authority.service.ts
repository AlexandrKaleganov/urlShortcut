import {Injectable} from '@angular/core';
import {Roles} from '../shared/models/roles.model';
import {AuthService} from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HashAuthorityService {
  authorities: Roles[];

  constructor(public authService: AuthService) {
    this.authService.getAuthority().subscribe(res => this.authorities = res.body);
  }

  public isVisible(roles: any): boolean {
    if (this.authorities) {
      if (this.authService.isHasAnyAuthority(this.authorities, roles)
      ) {
        return true;
      }
    } else {
      return false;
    }
  }
}
