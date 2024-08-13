import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movie_title = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((p) => {
      this.movie_title = p["movieTitle"];
      console.log(this.movie_title);
    })
  }
}
