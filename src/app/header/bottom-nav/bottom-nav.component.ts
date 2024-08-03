import { Component } from '@angular/core';

@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {
  mainmenu:string[] = ['Home','Products','About','Contact'];
}
