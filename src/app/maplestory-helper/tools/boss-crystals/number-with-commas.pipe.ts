import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithCommas',
  standalone: true
})
export class NumberWithCommasPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
