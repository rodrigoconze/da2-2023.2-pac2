import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../interfaces/catFact';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }
  
  catFacts:CatFact[] = [];

  getCatFact(){
    this.http.get("https://meowfacts.herokuapp.com/")
    .subscribe(value => alert((value as any).data))
  }
}
