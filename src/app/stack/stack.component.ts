import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements AfterViewInit {
  @ViewChild('infoText') infoText!: ElementRef;
  @ViewChild('imgFrontend') imgFrontend!: ElementRef;
  @ViewChild('imgBackend') imgBackend!: ElementRef;

  InfotextVisible = false;
  ImgCertificate = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.InfotextVisible) {
          this.showText(); // Funktion aufrufen, um den Text anzuzeigen
          observer.unobserve(entry.target); // Stoppe die Überwachung, nachdem der Text sichtbar ist
        }
        if (entry.isIntersecting && !this.ImgCertificate) {
          this.loadingIMG();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.infoText.nativeElement); // Überwache das infoText-Element
    observer.observe(this.imgFrontend.nativeElement);
  }

  private loadingIMG() {
    this.imgFrontend.nativeElement.style.transform = "rotate(0deg) translateX(0)";
    this.imgBackend.nativeElement.style.transform = "rotate(0deg) translatex(0)";
  }


  private showText() {
    const paragraph = this.infoText.nativeElement.querySelector('p');
    this.infoText.nativeElement.style.opacity = '1';
    this.infoText.nativeElement.style.transform = 'translateY(0px)';
    paragraph.style.opacity = '1';
    paragraph.style.transform = 'translateX(0%)';
    this.InfotextVisible = true;
  }
}
