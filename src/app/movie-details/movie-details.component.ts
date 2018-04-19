import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Imovie } from '../imovie';
import { HttpService } from '../http.service';
import { element } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css'],
	providers: [HttpService]
})
export class MovieDetailsComponent implements OnInit {

	private movies : Imovie[];
	private movie : Imovie;
	private MovieTitle : String;

	constructor(httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router) 
		{
//			httpService.getPopularMovies().subscribe(response => this.movies = response);
			this.MovieTitle = this.route.snapshot.params['title'];

			for(let x of this.movies)
			{
				if (this.MovieTitle === x.title) 
				{
					this.movie = x;						
				}
			}

		}

	ngOnInit() {
	}

}
/*
export class MovieDetailComponent implements OnInit {

  private movie : Movie;
  constructor(private movieService : MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie(this.route.snapshot.params['Title']);
  }

  public gotoMovies(){
    this.router.navigate(['/movie-list']);
  }

}

*/