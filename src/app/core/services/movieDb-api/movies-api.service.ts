import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail, RespuestaCredits } from '../../interfaces/movie-detail';
import { ResultMovies, Movies } from '../../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {



  apiUrl: string = environment.apiURL;
  apiUrlNotDiscover: string = environment.apiURLNotDiscover;
  apiSearch: string = environment.apiUrlToSearch;


  apiKey: string = environment.apiKey;
  imageApiURL: string = environment.imageUrl;
  initDate: string =  '2015-01-01'
  endDate: string = '2025-01-01'
  language: string = 'es'

  routes = {

    getMovies: () => `${this.apiUrl}?api_key=${this.apiKey}&page=1&language=es&include_image_language=es`,
    getPopular: (section: string, page: number) => `${this.apiUrl}?sort_by=${section}&api_key=${this.apiKey}&page=${page}&language=es&include_image_language=es`,
    getImage: (key: string) => `${this.imageApiURL}/${key}`,
    getDetail: (id: string) => `${this.apiUrlNotDiscover}/${id}?api_key=${this.apiKey}&language=es&include_image_language=es`, 
    getCredits:(id: string) => `${this.apiUrlNotDiscover}/${id}/credits?api_key=${this.apiKey}&language=es&include_image_language=es`,
    getMovie:(value: string) => `${this.apiSearch}/movie?query=${value}&api_key=${this.apiKey}&language=es&include_image_language=es`, 

  }

  constructor(private httpClient: HttpClient) {

  }

  getMovies(){
    return this.httpClient.get<ResultMovies>(this.routes.getMovies());
  }

  getPopular(section: string, page: number){
    return this.httpClient.get<ResultMovies>(this.routes.getPopular(section, page));
  }

  getMovieDetail(id: any){
    return this.httpClient.get<MovieDetail>(this.routes.getDetail(id));
  }

  getCredits(id: any){
    return this.httpClient.get<RespuestaCredits>(this.routes.getCredits(id));
  }

  searchMovies(value: string){
    return this.httpClient.get<ResultMovies>(this.routes.getMovie(value));
  }
}
