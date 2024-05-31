import { Component, OnInit } from '@angular/core';
import { CatFact } from '../interfaces/catFact';
import { CatFactsService } from '../service/catfacts.service';

@Component({
  selector: 'app-cat-fact-details',
  templateUrl: './cat-fact-details.component.html',
  styleUrls: ['./cat-fact-details.component.css']
})
export class CatFactDetailsComponent implements OnInit {

  constructor(private catFactService: CatFactsService) { }

  catDetails: CatFact[] = [];
  ngOnInit(): void {
    this.catDetails = this.catFactService.catFacts;
  }

}
