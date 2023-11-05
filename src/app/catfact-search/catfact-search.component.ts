import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../service/catfacts.service';

@Component({
  selector: 'catfact-search',
  templateUrl: './catfact-search.component.html',
  styleUrls: ['./catfact-search.component.css']
})
export class CatfactSearchComponent implements OnInit {

  constructor(private catfactService:CatFactsService) { }

  ngOnInit(): void {
  }

  getCatFact(){
    this.catfactService.getCatFact();
  }
}
