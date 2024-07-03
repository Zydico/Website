import { Component } from '@angular/core';
import { TitleComponent } from './pages/title/title.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ TitleComponent ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
