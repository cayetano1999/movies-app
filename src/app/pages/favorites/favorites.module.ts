import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './favorites.page';

import { Tab3PageRoutingModule } from './favorites-routing.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [Tab3Page]
})
export class FavoritesPageModule {}
