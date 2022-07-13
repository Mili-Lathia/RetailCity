import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [HeaderComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
