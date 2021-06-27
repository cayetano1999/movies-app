import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { PipesModule } from '../core/pipes/pipes.module';
import { SlidesComponent } from './slides/slides.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';

@NgModule({
    declarations: [SlidesComponent, SlideshowPosterComponent, SlideshowParesComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[SlidesComponent, SlideshowPosterComponent, SlideshowParesComponent]

  })
  export class ComponentsModule {}