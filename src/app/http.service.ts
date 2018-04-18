import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { Imovie } from './imovie';
import 'rxjs/add/operator/map';
import { MoviesComponent } from './movies/movies.component';

@Injectable()
export class HttpService 
{
	private ApiKey: String = "15fab5482bbf88e5deeed2913f8fe0a3";

	private http: Http;

	public moviesHeader: String;

	private popularMovies$:Observable<Imovie[]>;
	private searchedMovie$: Observable<Imovie>;
	private upcommingMovies$: Observable<Imovie[]>;

	constructor(http: Http) 
	{ 
		this.http = http;
	}

	public getSearchedMovie(): Observable<Imovie> 
	{
		this.moviesHeader = "Searched movies";
		this.searchedMovie$ = this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.ApiKey)
		.map(response => response.json().results)
		return this.searchedMovie$;
	}

	public getPopularMovies(): Observable<Imovie[]> 
	{
		this.moviesHeader = "Popular movies";
		this.popularMovies$ = this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.ApiKey)
		.map(response => response.json().results)
		return this.popularMovies$;
		//TODO: ikke færdig endnu (den skal kun return result som har en poster)
		//results.filter(movie => movie.poster_path !== null).map(movie => )
	}

	public getUpcommingpopularMovies(): Observable<Imovie[]>
	{
		this.moviesHeader = "Upcomming movies";
		this.upcommingMovies$ = this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.ApiKey)
		.map(response => response.json().results)
		return this.upcommingMovies$;
	}

}
