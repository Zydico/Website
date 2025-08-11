import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() link?: string;
  @Input() actualLink?: string;
  @Input() imageUrl: string;

  constructor(private router: Router) {
  }

  changePage(): void {
    if (this.link) {
      this.router.navigate([this.link]);
    } else if (this.actualLink) {
      window.location.href = this.actualLink;
    }
  }
}
