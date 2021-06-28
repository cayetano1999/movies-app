import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { Movies } from '../../interfaces/movies-response';
import { ToastControllerService } from '../ionic-components/toast-controller.service';
import { MovieDetail } from '../../interfaces/movie-detail';


@Injectable({
    providedIn: 'root'
})
export class DataLocalService {


    constructor(private storage: Storage, private toast: ToastControllerService) {
        // this.getAll();
    }

    async addItem(movie: MovieDetail, movies: MovieDetail[]) {
        const exist = movies.filter(n => n.id == movie.id).length > 0;
        if (!exist) {
            movies.push(movie);
            await this.storage.set('movies', movies);
            this.toast.showToastSuccess('Pelicula Agregada a Favoritos');
        }
        else {
            this.toast.showToastWarning('Ya tienes esta pelicula en tus favoritos');
        }
    }


    existItem(movie: MovieDetail, movies: MovieDetail[]) {
        return movies.filter(n => n.id == movie.id).length > 0;
    }

    async setAsRemove(movies: MovieDetail[]) {
        await this.storage.set('movies', movies);
        this.toast.showToastSuccess('Pelicula removida de favoritos');
    }

    async GetAllItem() {
        return await this.storage.get('movies');
    }


    async clear() {
        return await this.storage.clear();
    }

    async create() {
        return await this.storage.create();
    }
}
