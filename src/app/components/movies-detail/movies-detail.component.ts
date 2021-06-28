import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies-response';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';
import { MovieDetail, RespuestaCredits, Cast } from '../../core/interfaces/movie-detail';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DataLocalService } from 'src/app/core/services/storage-service/storage.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {

  @Input() movie: MovieDetail;
  moviesF: MovieDetail[] = [];
  actores: Cast[] = [];
  end: number = 200;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -10,
  }
  isFavorite: boolean = true;

  constructor(private apiService: MoviesApiService, private modalController: ModalController, private inB: InAppBrowser, private str: Storage, private storageService: DataLocalService) {
    
   }

  async ngOnInit() {
    this.getMovieDetail();
    this.str.create().then(async r => {
      this.moviesF = await this.storageService.GetAllItem();
      console.log('Favoritos', this.moviesF);
      this.isInFavorite();
    })

  }


  getMovieDetail() {
    this.apiService.getMovieDetail(this.movie.id).subscribe(response => {
      console.log(response);
      this.movie = response;
    })

    this.apiService.getCredits(this.movie.id).subscribe(response => {
      console.log('CRD', response)
      this.actores = response.cast;
    })
  }

  showFullText() {
    this.end = this.movie.overview.length;
  }

  showLowerText() {
    this.end = 200;
  }

  goBack() {
    this.modalController.dismiss();
  }

  goToPage(item: MovieDetail) {
    this.inB.create(item.homepage, '_system');
  }

  async addToFavorite(item: MovieDetail) {
    await this.storageService.addItem(item, this.moviesF);
    this.isInFavorite();
  }

  async isInFavorite() {
    this.isFavorite = this.storageService.existItem(this.movie, this.moviesF);
  }

}
