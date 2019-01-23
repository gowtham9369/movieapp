import { Component, OnInit } from '@angular/core';
import { MoviegridService } from './moviegrid.service';
import { FilterPipe } from '../filter.pipe';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  public filter : string;
  contentGeneral: any;
  constructor(private movieService :MoviegridService,private router: Router) { 
  }
  ngOnInit() {
    this.getContentJSON();
    }
    getContentJSON() {
      this.movieService.getContentJSON().subscribe(data => {
        this.contentGeneral = data;
        // console.log(this.contentGeneral);
      }, // Bind to view
      err => {
        // Log errors if any
        console.log('error: ', err);
      });
    }
    getMovieDetails(movie) {
      this.router.navigateByUrl('MovieSummary');
      var id=this.contentGeneral[movie];
      localStorage.setItem("movieDetails",JSON.stringify(id));
      // console.log(JSON.stringify(id));
    }

}
