import { Component } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  mainmenu:string[] = ['Help','Exchange & Returns','Order Tracker','SignUp / Login'];
}
