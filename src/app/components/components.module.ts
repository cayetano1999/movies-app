import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { PipesModule } from '../core/pipes/pipes.module';
import { SlidesComponent } from './slides/slides.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { DataLocalService } from '../core/services/storage-service/storage.service';

@NgModule({
    declarations: [SlidesComponent, SlideshowPosterComponent, SlideshowParesComponent, MoviesDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[SlidesComponent, SlideshowPosterComponent, SlideshowParesComponent, MoviesDetailComponent],
  providers:[DataLocalService]

  })
  export class ComponentsModule {}