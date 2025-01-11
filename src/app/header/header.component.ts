import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() { }

  @Output() navigate = new EventEmitter<string>();
  burgermenu = false;

  onNavigate(section: string) {
    this.navigate.emit(section);
    if(window.innerWidth <= 1130) {
      this.burgermenu = false;
    }
  }




  showMenu() {
    if (this.burgermenu == false) {
      this.burgermenu = true;
    } else {
      this.burgermenu = false;
    }
  }
}
