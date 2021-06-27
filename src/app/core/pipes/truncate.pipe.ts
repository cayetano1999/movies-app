import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string,  start: number, end: number): string {
    
    if(!value){
      return '';
    }

    if(end == value.length){
      return value;
    }
    
    return `${value.slice(start, end)}... `

  }

}
