import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/core/interfaces/movies-response';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @Input() movies: Array<Movies> = [];
  @Input() slideOpts : any;  

  constructor() { }

  ngOnInit() {}

}
