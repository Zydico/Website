import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() name: string;
  
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))  
    .subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/maplestory-helper/boss-crystals') {
        this.name = 'Boss Crystals';
      } else if (event.urlAfterRedirects === '/maplestory-helper/ied-calculator') {
        this.name = 'IED Calculator';
      }
    });
  }
}