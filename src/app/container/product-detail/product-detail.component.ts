import { Component, Input } from '@angular/core';
import { product } from '../../Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input() productListComp: ProductListComponent = undefined;
  product:product;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }
}
