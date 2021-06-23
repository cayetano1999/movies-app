import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'movies',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
      },
      {
        path: '',
        redirectTo: '/movies/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/movies/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MoviesTabsModule {}
