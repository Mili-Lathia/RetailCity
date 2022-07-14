import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/services/http-service/http.service';
import { CartService } from '../shared/services/cart-service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  products
  productDetails:any;
  isProductLoad:boolean=false;
  constructor( private router: Router,private httpService: HttpService,private cartService: CartService) { 
    // get index id from the router
    const index = parseInt(this.router.url.split('/')[2].split('-')[1]);
    // get json data from json file
    this.httpService.getData("assets/products.json").subscribe(res=>{
      this.products = res;
      this.productDetails = this.products[index-1];
      this.isProductLoad = true;
    })
  }
  ngOnInit(): void {
    
  }
  // add product into cart
  addToCart(product){
    this.cartService.addItem(product);
  }
  // go to cart page
  goToCart(){
    this.router.navigate(['/cart']);
  }
}
