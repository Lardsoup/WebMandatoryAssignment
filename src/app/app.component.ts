import { Component } from '@angular/core';
import { Imovie } from './imovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  private selectedMovie : Imovie;

  public movieSelected(movie : Imovie){this.selectedMovie=movie;}
}
