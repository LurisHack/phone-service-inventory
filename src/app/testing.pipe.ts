import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing',
  standalone: true
})
export class TestingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any{
    console.log('testing pipe called')
    console.log(value)
    return value
  }

}
