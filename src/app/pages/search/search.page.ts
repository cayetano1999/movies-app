import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesDetailComponent } from 'src/app/components/movies-detail/movies-detail.component';
import { Movies } from 'src/app/core/interfaces/movies-response';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class Tab2Page {

  filter: string = ''
  toShow: Array<string> = [
    'Spiderman',
    'Avenger',
    'Rambo',
    'Anabelle',
    'Mi Pobre Angelito III'
  ]
  slideOptsBillboard = {
    slidesPerView: 3.3,
    freeMode: true
  }
  movies: Array<Movies> = [];
  loading: boolean = false;
  constructor(private moviesApiService: MoviesApiService, private modalController: ModalController) {}

  onSearchChange(event: any){
    this.loading = true;
    this.filter = event.detail.value;
    console.log(event.detail.value);
    if(String(this.filter).length == 0) {this.loading = false; this.movies = []; return}
    this.moviesApiService.searchMovies(this.filter).subscribe(r=> {
      console.log(r);
      this.movies = r.results;
      this.loading = false;
    })
  }

  fromList(item: string){
    this.loading = true;
    this.filter = item;
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
