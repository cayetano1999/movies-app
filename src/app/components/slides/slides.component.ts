import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/core/interfaces/movies-response';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @Input() movies: Array<Movies> = [];
  @Input() slideOpts : any;
  @Output() showDetails = new EventEmitter();
  

  constructor(private  modalController: ModalController) { }

  ngOnInit() {}

   showDetail(item: Movies){
    this.showDetails.emit(item);
  }

}
