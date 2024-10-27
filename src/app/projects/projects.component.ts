import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  DaBubble: boolean = false;
  Videoflix: boolean = false;

  @ViewChild('textBubble') textBubble!: ElementRef
  constructor(){}

  onHoverDaBubble(status: boolean) {
    this.DaBubble = status; 
  }

  onHoverVideoflix(status: boolean){
    this.Videoflix = status;
  }
}
