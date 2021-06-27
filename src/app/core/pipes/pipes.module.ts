import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FilterPipePipe } from './filter-pipe.pipe';
import { PicturePipe } from './picture.pipe';
import { ParPipe } from './par.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    declarations: [FilterPipePipe, PicturePipe, ParPipe, TruncatePipe],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [FilterPipePipe, PicturePipe, ParPipe, TruncatePipe]

})
export class PipesModule { }