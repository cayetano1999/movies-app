import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movies } from 'src/app/core/interfaces/movies-response';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Array<Movies> = [];
  @Input() slideOpts : any;  
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  showDetail(item: Movies){
    this.showDetails.emit(item);
  }

}
