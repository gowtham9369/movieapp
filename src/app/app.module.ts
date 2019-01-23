import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// component
import { AppComponent } from './app.component';
// pipe transform filter
import { FilterPipe } from './filter.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';

const appRoutes: Routes = [
  { path: 'Movie-app',      component: MovieGridComponent }, 
  { path: 'MovieSummary',      component: MovieDetailsComponent }, 
  { path: '',    redirectTo: 'Movie-app',  pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    MovieDetailsComponent,
    MovieGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
