import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Imovie } from '../imovie';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css'],
	providers: [HttpService]
})
export class MoviesComponent implements OnInit {
	movies: Imovie[];
	moviesHeader: String;
	private selectedMovie: Imovie;

	@Output('movie-selected') public movieSelected = new EventEmitter<Imovie>();

	constructor(httpService: HttpService, 
		private route: ActivatedRoute,
		private router: Router) {
		httpService.getPopularMovies().subscribe(response => this.movies = response);
		this.moviesHeader = httpService.moviesHeader;
		//F1Service.getDrivers().subscribe(response => this.drivers = response);
	}
	ngOnInit() {

	}
	
	public onSelect(movie: Imovie) {
		this.router.navigate(['/movie-details', movie.title]);
	}
/*
public gotoMovies(movie : Imovie){
		this.router.navigate(['/movie-details', movie.title]);
	  }
*/



}
