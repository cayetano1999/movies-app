import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies-response';
import { MoviesApiService } from '../../core/services/movieDb-api/movies-api.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {

  @Input() movie: Movies;

  constructor(private apiService: MoviesApiService) { }

  ngOnInit() {
    this.getMovieDetail();
  }


  getMovieDetail(){
    this.apiService.getMovieDetail(this.movie.id).subscribe(response=> {
      console.log(response)
    })
  }

}
