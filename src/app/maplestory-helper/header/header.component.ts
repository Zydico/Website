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
      } else if (event.urlAfterRedirects === '/maplestory-helper/useful-resources') {
        this.name = 'Useful Resources';
      } else if (event.urlAfterRedirects === '/maplestory-helper/dailies-weeklies') {
        this.name = 'Dailies/Weeklies';
      } else if (event.urlAfterRedirects === '/maplestory-helper/about') {
        this.name = 'About';
      }
    });
  }
}
