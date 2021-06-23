import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PipesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
