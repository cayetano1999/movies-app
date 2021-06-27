import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../core/interfaces/movies-response';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {

  @Input() movie: Movies;

  constructor() { }

  ngOnInit() {}

}
