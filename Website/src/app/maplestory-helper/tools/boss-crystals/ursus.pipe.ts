import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ursus',
  standalone: true
})
export class UrsusPipe implements PipeTransform {

  transform(highest_level: number, server: string): number {
    return Math.round(highest_level * 138206.25 * 3 * 7 / (server == 'reboot' ? 1 : 5));
  }

}
