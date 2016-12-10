import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fountainCategoryList'
})
export class CategoryListPipe implements PipeTransform  {
  transform(mediaItems: any) {
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
