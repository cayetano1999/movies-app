import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './search.page';

import { Tab2PageRoutingModule } from './search-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [Tab2Page]
})
export class SearchPageModule {}
