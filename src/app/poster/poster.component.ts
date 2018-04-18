import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../imovie';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-poster',
	templateUrl: './poster.component.html',
	styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
	public PosterImgPath : "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";
	public PosterImg : String;

	@Input() public movie: Imovie;

	constructor() {
	}

	ngOnInit() 
	{
		this.PosterImg = this.PosterImgPath + this.movie.poster_path
	}

}
