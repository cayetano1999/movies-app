import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from 'src/app/core/interfaces/movies-response';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  movies: Array<MoviesResponse> = [];

  constructor(private movesApiService: MoviesApiService) {

  }

  ngOnInit() {
    this.getAllMovies();
  }

  async getAllMovies() {
    await this.movesApiService.getMovies().subscribe(response => {
      this.movies = response;
      console.log(this.movies);
    });
  }

}
