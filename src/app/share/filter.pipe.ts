import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, properName: string): any[] {
    const result: any = [];

    if (!value || filterString === '' || properName === '') {
      return value;
    }
    value.forEach((item: any) => {
      if (
        item[properName]
          .trim()
          .toLowerCase()
          .includes(filterString.toLocaleLowerCase())
      ) {
        result.push(item);
      }
    });
    return result;
  }
}
