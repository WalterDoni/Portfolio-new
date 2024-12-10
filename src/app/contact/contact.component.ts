import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Element } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  @ViewChild('emailsend') emailsend!: ElementRef;


  constructor(private http: HttpClient) { }

  async sendMail() {
    const mailValues = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    try {
      const response = await firstValueFrom(this.http.post('https://email-senden.walter-doni.at/send-mail/', mailValues));
      this.clearValuesFromFormForEmail();
      this.showSuccessMessage();
    } catch (error) {
      console.error('Fehler beim Senden der Email', error);
    }
  }

  clearValuesFromFormForEmail() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  showSuccessMessage() {
    this.emailsend.nativeElement.style.display = "flex";
    setTimeout(() => {
      this.emailsend.nativeElement.classList.add('show');
    }, 0);
    setTimeout(() => {
      this.emailsend.nativeElement.classList.remove('show');
      setTimeout(() => {
        this.emailsend.nativeElement.style.display = "none";
      }, 1000);
    }, 3000);
  }


}
