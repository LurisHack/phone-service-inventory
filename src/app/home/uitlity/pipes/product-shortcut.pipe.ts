import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productShortcut',
  standalone: true
})
export class ProductShortcutPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): { groupName: string, data: any[] }[] {
    return Array.from(new Set(value.map(f => f.groupName)))
      .map(m => {
        console.log(m)
        return {
          groupName: m,
          data: value.filter(f => f.groupName == m)
        }
      })
  }

}
