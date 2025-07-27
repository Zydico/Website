import { Component } from '@angular/core';
import { TitleComponent } from './pages/title/title.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ TitleComponent, ProjectsComponent, HeaderComponent, ContactComponent ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
