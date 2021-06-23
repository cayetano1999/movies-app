import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Movies} from 'src/app/core/interfaces/movies-response';
import { Trillers } from 'src/app/core/interfaces/trillers';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  movies: Array<Movies> = [];
  billboards: Array<Movies> = [];
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  slideOptsBillboard = {
    slidesPerView: 3.3,
    freeMode: true
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



  constructor(private movesApiService: MoviesApiService) {

  }

  ngOnInit() {
    this.getAllMovies();
  }

  async getAllMovies() {
    await this.movesApiService.getMovies().subscribe(response => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }

}
