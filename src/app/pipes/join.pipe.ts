import { Pipe, PipeTransform } from '@angular/core';

import { map } from 'lodash-es';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(arr: any[], field: string, separator: string): any {
    // Si existe el array
    if (arr) {
      // mapea los elementos y hace un join con el separador dado
      return map(arr, field).join(separator);
    }
    return '';
  }

}
