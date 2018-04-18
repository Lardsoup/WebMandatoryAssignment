import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MoviesComponent } from '../movies/movies.component';
import { MovieDetailsSmallComponent } from '../movie-details-small/movie-details-small.component';

const appRoutes: Routes = [
	{ path: 'movie-list', component: MoviesComponent },
	{ path: 'movie-details/:title', component: MovieDetailsComponent },
	{ path: 'movie-details-small', component: MovieDetailsSmallComponent },
	{ path: '', redirectTo: '/movie-list', pathMatch: 'full' },
	{ path: '**', component: MoviesComponent }
];

@NgModule({
  imports: [
	CommonModule,
	RouterModule.forRoot(appRoutes),
  ],
  exports:[
	RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
