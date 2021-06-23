import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { PipesModule } from '../core/pipes/pipes.module';
import { SlidesComponent } from './slides/slides.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
    declarations: [SlidesComponent, SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[SlidesComponent, SlideshowPosterComponent]

  })
  export class ComponentsModule {}