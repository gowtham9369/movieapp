import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


interface myMovie{

}

@Injectable({
  providedIn: 'root'
})
export class MoviegridService {

  constructor(private http: HttpClient) { }
  getContentJSON(){
    return this.http.get<myMovie>('assets/data.json')
    }
}
