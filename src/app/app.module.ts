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

const appRoutes: Routes = [
  { path: 'Movie-app',      component: AppComponent }, 
  { path: '',    redirectTo: 'Movie-app',  pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
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
