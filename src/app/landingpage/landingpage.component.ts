import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit, OnDestroy {
  greetingMessage: string = "";
  private messages: string[] = [
    "Ein herzliches Servus und Hallo.",
    "Willkommen auf meiner Webseite.",
    "Ich bin der Walter."
  ];
  private currentIndex: number = 0;
  private intervalId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Prüft, ob der Code im Browser ausgeführt wird
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.displayGreetingMessages(); // Nur im Browser Kontext wird die Funktion ausgeführt
    }
  }

  displayGreetingMessages() {
    const updateMessage = () => {
      if (this.currentIndex < this.messages.length) {
        const message = this.messages[this.currentIndex];
        this.greetingMessage = message;

        // Sicherstellen, dass der DOM-Zugriff nur im Browser erfolgt
        const element = this.isBrowser ? document.querySelector('.headlineP') as HTMLElement : null;
        if (element) {
          this.renderer.removeClass(element, 'hiding');
          this.renderer.addClass(element, 'showing');

          setTimeout(() => {
            this.renderer.removeClass(element, 'showing');
            this.renderer.addClass(element, 'hiding');
          }, 3000); // Dauer für das Anzeigen und Verstecken der Nachricht

          // Wechsel zur nächsten Nachricht nach 5 Sekunden
          setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.messages.length;
            updateMessage();
          }, 5000);
        }
      }
    };

    updateMessage();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
