import { Component, OnInit, OnDestroy } from '@angular/core';

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
    "Hallo",
    "Mein Name ist Walter Doni",
    "Willkommen auf meiner Webseite"
  ];
  private currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.displayGreetingMessages();
  }

  displayGreetingMessages() {
    const updateMessage = () => {
      if (this.currentIndex < this.messages.length) {
        const message = this.messages[this.currentIndex];
        this.greetingMessage = message;
        const element = document.querySelector('.headlineP') as HTMLElement;
        if (element) {
          element.classList.remove('hiding');
          element.classList.add('showing');

          setTimeout(() => {
            element.classList.remove('showing');
            element.classList.add('hiding');
          }, 3000); // Match with CSS animation duration for showing

          // Move to the next message after current message hides
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
