import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpService } from './http.service';
import { PosterComponent } from './poster/poster.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'
import { AppRouterModule } from './app-router/app-router.module';
import { MovieDetailsSmallComponent } from './movie-details-small/movie-details-small.component';


@NgModule({
  declarations: [
    AppComponent,
	MoviesComponent,
	PosterComponent,
	MovieDetailsComponent,
	MovieDetailsSmallComponent
  ],
  imports: [
	BrowserModule,
	HttpModule,
	AppRouterModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
