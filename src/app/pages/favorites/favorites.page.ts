import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MoviesDetailComponent } from 'src/app/components/movies-detail/movies-detail.component';
import { MovieDetail } from 'src/app/core/interfaces/movie-detail';
import { Movies } from 'src/app/core/interfaces/movies-response';
import { DataLocalService } from '../../core/services/storage-service/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class Tab3Page {


  moviesF: MovieDetail[] = [];


  constructor(private str: Storage, private storageService: DataLocalService, private inB: InAppBrowser, private modalController: ModalController) {
    this.str.create().then(async r => {
      this.moviesF = await this.storageService.GetAllItem();
      console.log('Favoritos', this.moviesF);
    });
  }

  goToPage(item: MovieDetail) {
    this.inB.create(item.homepage, '_system');
  }

  async removeFavorite(item: MovieDetail) {
    this.moviesF = this.moviesF.filter(m => m.id != item.id);
    await this.storageService.setAsRemove(this.moviesF);
    this.moviesF = await this.storageService.GetAllItem();
    

  }

  async doRefresh(even) {
    this.moviesF = await this.storageService.GetAllItem();
    console.log('Favoritos', this.moviesF);
    even?.target?.complete();
  }

  async showDetails(movie: Movies) {
    debugger;
    const modal = await this.modalController.create({
      component: MoviesDetailComponent,
      animated: true,
      componentProps: {
        movie: movie
      },
      showBackdrop: true,
      swipeToClose: true
    });

    modal.present();
  }

}
