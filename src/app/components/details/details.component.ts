import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{
  movieId = '';
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((parameters) => {
      this.movieId = parameters["id"];
      console.log("Movie ID = " + this.movieId);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called...");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called...");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called...");
  }

  ngOnInit(): void {
      console.log("ngOnInit is called...");
  }

  myName = 'Ahmed';
}
