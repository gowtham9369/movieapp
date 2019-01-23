import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
public movieSummary:any;
  constructor() { }

  ngOnInit() {
    this.movieSummary= JSON.parse(localStorage.getItem("movieDetails"));
    // console.log(this.movieSummary.title);
    // alert(JSON.stringify(this.movieSummary));
  }

}
