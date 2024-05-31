import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../service/catfacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'catfact-search',
  templateUrl: './catfact-search.component.html',
  styleUrls: ['./catfact-search.component.css']
})
export class CatfactSearchComponent implements OnInit {

  showDetails:boolean = false;
  catFact:string = "";

  constructor(private catfactService:CatFactsService, private router: Router) { }

  ngOnInit(): void {
  }

  getCatFact(){
    this.catfactService.getCatFact().subscribe((data:any) => {
      this.catFact = data.data;
      this.catfactService.catFacts.push(data.data);
      this.showDetails = true;
    });
  }

  goToDetails(){
    this.router.navigate(['/details']);
  }
}
