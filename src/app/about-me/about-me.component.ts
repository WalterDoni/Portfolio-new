import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('aboutme') aboutme!: ElementRef

  constructor(){}

  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.aboutme.nativeElement.style.filter = "blur(0px)";
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(this.aboutme.nativeElement);
    } else {
      console.warn('IntersectionObserver is not available in this environment.');
    }
  }
}
