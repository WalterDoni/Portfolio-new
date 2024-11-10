import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  greetingMessage: string = ""; // Bindung für die aktuelle Nachricht
  private messages: string[] = [
    "Ein herzliches Servus und Hallo.",
    "Willkommen auf meiner Webseite.",
    "Ich bin der Walter."
  ];
  private currentIndex: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.displayGreetingMessages();
  }

  displayGreetingMessages() {
    const updateMessage = () => {
      if (this.currentIndex < this.messages.length) {
        const message = this.messages[this.currentIndex];
        this.greetingMessage = message;

        if (typeof document !== 'undefined') {
          const element = document.querySelector('.headlineP');
          if (element) {
            this.renderer.removeClass(element, 'hiding');
            this.renderer.addClass(element, 'showing');

            setTimeout(() => {
              this.renderer.removeClass(element, 'showing');
              this.renderer.addClass(element, 'hiding');
            }, 3000);

            setTimeout(() => {
              this.currentIndex = (this.currentIndex + 1) % this.messages.length;
              updateMessage();
            }, 5000);
          }
        }
      }
    };
    updateMessage();
  }


}
