import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
@Pipe({
  name: 'picture'
})
export class PicturePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    const imgURL = `${environment.imageUrl}/${size}/${img}`
    if(!img){
      return '../../../assets/img/logo.PNG';
    }
    return imgURL;
  }

}
