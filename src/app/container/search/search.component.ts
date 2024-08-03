import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output()
  searchtxt: EventEmitter<string> = new EventEmitter<string>();

  searchText:string="";
  @ViewChild("searchtxt") inputxt: ElementRef;
  // Onbtnclick(){
  //   this.searchtxt.emit(this.searchText);
  // }
  updateSearchText(){
    this.searchText = this.inputxt.nativeElement.value;
    // console.log(this.searchText);
    this.searchtxt.emit(this.searchText);
  }
}
