import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/core/interfaces/movies-response';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() movies: Array<Movies> = [];
  @Input() slideOpts : any;  
  @Output() loadMoreOutput = new EventEmitter();
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  loadMore(){
    this.loadMoreOutput.emit(true);
  }

  showMovieDetails(item: Movies){
    this.showDetails.emit(item);
  } 
}
