import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http-service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products
  constructor(private httpService: HttpService) { 
    // get json data form json file which in assets file folder
    this.httpService.getData("assets/products.json").subscribe(res=>{
      this.products = res;
    })
  }
  ngOnInit(): void {
  }

}
