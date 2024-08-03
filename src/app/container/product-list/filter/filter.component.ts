import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  All:number=0;
  @Input()
  InStock:number=0;
  @Input()
  OutOfStock:number=0;


  RChange:string = "All";

  @Output()
  OnBtnChange:EventEmitter<string> = new EventEmitter<string>();

  Onbtnclick() {
    this.OnBtnChange.emit(this.RChange);
  }
}
