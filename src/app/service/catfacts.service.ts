import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../interfaces/catFact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }
  
  catFacts:CatFact[] = [];

  getCatFact(): Observable<any>{
    return this.http.get("https://meowfacts.herokuapp.com/");
  }
}
