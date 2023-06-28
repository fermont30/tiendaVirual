import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');

    const capitalizedWords = words.map(word => this.capitalize(word));

    return capitalizedWords.join(' ');
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
