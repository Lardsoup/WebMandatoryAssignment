import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Imovie } from '../imovie'

@Component({
	selector: 'app-movie-details-small',
	templateUrl: './movie-details-small.component.html',
	styleUrls: ['./movie-details-small.component.css']
})
export class MovieDetailsSmallComponent implements OnInit {
	public PosterImgPath : "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
	public PosterImg : String;

	@Input() public movie: Imovie;

	constructor(private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.PosterImg = this.PosterImgPath + this.movie.poster_path;
	}

	public gotoMovies(movie : Imovie){
		this.router.navigate(['/movie-details', movie.title]);
	  }
}
