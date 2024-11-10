import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) { }

  @Output() navigate = new EventEmitter<string>();

  onNavigate(section: string) {
    this.navigate.emit(section);
  }

  navigateToImprint(){
    this.router.navigateByUrl('imprint');
  }

  navigateToDataprotection(){
    this.router.navigateByUrl('dataprotection')
  }
}
