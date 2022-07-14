import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItems = 0;
  cartService = null;
  constructor(private router: Router,private cart: CartService) { }

  ngOnInit() {
    // subscribe cart service
    this.cartService = this.cart.cartUpdate.subscribe(res=>{
      this.totalItems = res.length;
    })
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }
  ngOnDestroy(){
    // unsubscribe cart service to avoid memory leak
    this.cartService.unsubscribe();
  }
}
