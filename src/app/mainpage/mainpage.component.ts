import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { StackComponent } from '../stack/stack.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, LandingpageComponent, AboutMeComponent, StackComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

  constructor() { }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
