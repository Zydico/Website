import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-maplestory-helper',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideNavItemComponent],
  templateUrl: './maplestory-helper.component.html',
  styleUrl: './maplestory-helper.component.css'
})
export class MaplestoryHelperComponent {

}
