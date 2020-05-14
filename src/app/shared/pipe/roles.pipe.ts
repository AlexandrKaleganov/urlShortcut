import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {
  private authorities: any = {
    ADMIN: {name: 'badge badge-danger'},
    USER: {name: 'badge badge-success'},
  };

  transform(value: string): string {
    return this.authorities[value].name;
  }

}
