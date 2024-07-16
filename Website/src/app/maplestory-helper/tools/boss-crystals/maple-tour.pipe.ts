import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapleTour',
  standalone: true
})
export class MapleTourPipe implements PipeTransform {

  transform(server: string): number {
    return Math.round(24510668 * 14 / (server == 'reboot' ? 1 : 5));
  }

}
