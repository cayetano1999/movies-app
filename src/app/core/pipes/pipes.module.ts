import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FilterPipePipe } from './filter-pipe.pipe';
import { PicturePipe } from './picture.pipe';

@NgModule({
    declarations: [FilterPipePipe, PicturePipe],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [FilterPipePipe, PicturePipe]

})
export class PipesModule { }