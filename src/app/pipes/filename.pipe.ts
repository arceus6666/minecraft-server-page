import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filename'
})
export class FilenamePipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split('_');
    // tslint:disable-next-line: forin
    for (const e in words) {
      const w = words[e];
      words[e] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(' ');
  }

}
