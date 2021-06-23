import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  apiUrl: string = environment.apiURL;
  apiKey: string = environment.apiKey;

  routes = {

  }

  constructor(private httpClient: HttpClient) {

  }

}
