import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  ReceivedInput:string='';

  @ViewChild(ProductListComponent)
  ProductListComponent:ProductListComponent;
  
  Capturetext(val:string){
    this.ReceivedInput = val;
    // console.log(this.ReceivedInput);
  }
}
