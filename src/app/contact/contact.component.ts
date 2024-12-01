import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';


  constructor(private http: HttpClient) { }

  async sendMail() {
    const mailValues = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    try {
      const response = await firstValueFrom(this.http.post('ADRESSE EINFÜGEN', mailValues));
      this.clearValuesFromFormForEmail();
      alert('Nachricht gesendet')
    } catch (error) {
      console.error('Fehler beim Senden der Email', error);
    }
  }

  clearValuesFromFormForEmail() {
    this.name = '';
    this.email = '';
    this.message = '';
  }


}
