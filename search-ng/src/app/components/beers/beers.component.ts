import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers;
  filtered;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://api.punkapi.com/v2/beers')
      .subscribe(res => (this.beers = res));
  }
  Search(){
    if (this.filtered === ""){
      this.ngOnInit();
    }else{
      this.beers = this.beers.filter(item => {
        return item.name.toLocaleLowerCase().includes(this.filtered);
      });
    }
  }
}
