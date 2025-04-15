import { Component } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    PopupComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
show : boolean = false;

onPopup(){
  this.show = !this.show;
  console.log(this.show);
}
}
