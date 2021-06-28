import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/core/interfaces/movies-response';
import { Trillers } from 'src/app/core/interfaces/trillers';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';
import { ModalController } from '@ionic/angular';
import { MoviesDetailComponent } from 'src/app/components/movies-detail/movies-detail.component';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  movies: Array<Movies> = [];
  popularMovies: Array<Movies> = [];
  billboards: Array<Movies> = [];
  popularPage: number = 1;
  scrolled: number = 0;
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  }

  slideOptsBillboard = {
    slidesPerView: 3.3,
    freeMode: true
  }

  sildeOptsPopular = {
    slidesPerView: 2.0,
    freeMode: true,
    spaceBetween: -10,
  }

  trillers: Array<Trillers> = [
    {
      name: 'Rapidos y Furiosos',
      gif: '../../assets/gif/ff8.gif',
    },
    {
      name: 'Godzilla VS Kong',
      gif: 'https://i.pinimg.com/originals/b0/f9/c5/b0f9c53a4d67a964f2de396e968b2592.gif',
    },
    {
      name: 'La Casa de Papel',
      gif: 'https://media1.tenor.com/images/92a25734acd8d3d76fbc95d9a8f2218f/tenor.gif?itemid=11023931',
    },
    {
      name: 'Elite',
      gif: 'https://media1.tenor.com/images/5a4db2220ac4a1d1bd6b929bbc484b65/tenor.gif?itemid=14988044',
    }
  ]
  header: boolean = true;;



  constructor(private movesApiService: MoviesApiService, private modalController: ModalController) {

  }

  onScroll(event) {
    debugger;
    let element = document.getElementById('welcome');
    const value = String(event.detail.scrollTop / 100);
    console.log('scroll:', event.detail.scrollTop, 'opc:', value);



    this.scrolled = event.detail.scrollTop;
    if (this.scrolled >= 56) {
      this.header = false
    }
    else if (this.scrolled <= 55) {
      this.header = true;
    }

  }

  ngOnInit() {
    this.getAllMovies();
    this.getPopular();
  }

  async getAllMovies() {
    await this.movesApiService.getMovies().subscribe(response => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }

  async getPopular() {
    await this.movesApiService.getPopular('popular', 1).subscribe(response => {
      this.popularMovies = response.results;
    })
  }

  async loadMorePares(evnet) {
    this.popularPage++;
    await this.movesApiService.getPopular('popular', this.popularPage).subscribe(response => {
      debugger;
      let arrayTemp = [...this.popularMovies, ...response.results];
      this.popularMovies = arrayTemp;
    });
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
