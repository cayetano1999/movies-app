import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from '../../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {



  apiUrl: string = environment.apiURL;
  apiKey: string = environment.apiKey;
  initDate: string =  '2015-01-01'
  endDate: string = '2025-01-01'
  language: string = 'es'

  routes = {

    getMovies: () => `${this.apiUrl}?api_key=${this.apiKey}&page=1&language=es&include_image_language=es`


  }

  constructor(private httpClient: HttpClient) {

  }

  getMovies(){
    return this.httpClient.get<Array<MoviesResponse>>(this.routes.getMovies());
  }

}
