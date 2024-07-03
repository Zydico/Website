import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.css'
})
export class SideNavItemComponent {
  @Input() name: string;
  @Input() url: string;
  selected: boolean;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))  
    .subscribe((event: NavigationEnd) => {
      this.selected = event.urlAfterRedirects === "/maplestory-helper/" + this.url;
    });
  }
  
  changePage(): void {
    if (this.url) {
      this.router.navigate(['maplestory-helper', this.url]);
    }
  }
}
