import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  validate: boolean = false;
  @ViewChild('emailsend') emailsend!: ElementRef;


  constructor(private http: HttpClient) { }


  checkInputs() {
    this.validate = this.isNameValid() && this.isEmailValid() && this.isMessageValid();
  }

  isNameValid(): boolean {
    return this.name?.trim().length >= 3;
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  isMessageValid(): boolean {
    return this.message?.trim().length >= 3;
  }

  async sendMail() {
    const mailValues = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    console.log('Sending email with values:', mailValues); // Debugging

    try {
      const response = await firstValueFrom(this.http.post('https://email.walter-doni.at/send-mail/', mailValues));
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
    this.validate = false;
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
