import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements AfterViewInit {
  @ViewChild('infoText') infoText!: ElementRef;
  InfotextVisible = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.InfotextVisible) {
          this.showText(); // Funktion aufrufen, um den Text anzuzeigen
          observer.unobserve(entry.target); // Stoppe die Überwachung, nachdem der Text sichtbar ist
        }
      });
    });

    observer.observe(this.infoText.nativeElement); // Überwache das infoText-Element
  }

  private showText() {
    const paragraph = this.infoText.nativeElement.querySelector('p');
    this.infoText.nativeElement.style.opacity = '1';
    this.infoText.nativeElement.style.transform = 'translateX(0%)';
    paragraph.style.opacity = '1';
    paragraph.style.transform = 'translateX(0%)';
    this.InfotextVisible = true;
  }
}
