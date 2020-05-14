import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rolesName'
})
export class RolesNamePipe implements PipeTransform {
  private rolesName: any = {
    ADMIN: {name: 'Администратор'},
    USER: {name: 'Пользователь'}
  };

  transform(value: string): string {
    return this.rolesName[value].name;
  }
}
