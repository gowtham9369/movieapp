import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieApp';
  public filter : string;
  contentGeneral: any;
  constructor(private movieService :AppService) { 
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
}
