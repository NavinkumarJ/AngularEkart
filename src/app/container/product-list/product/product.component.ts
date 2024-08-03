import { Component, Input } from '@angular/core';
import { product } from '../../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:product;


  like:boolean = false;
  wish(val:any){
  console.log(val);
  this.like = !(this.like);
   }
}
