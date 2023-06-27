import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(description: string | null | undefined, expand: boolean): string {
    if (!description) {
      return '';
    }
    const maxLength = 100;
    if (expand || description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + '...';
    }
  }
}
