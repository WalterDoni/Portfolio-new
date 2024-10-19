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

  onNavigate(section: string) {
    this.navigate.emit(section);
  }
}
