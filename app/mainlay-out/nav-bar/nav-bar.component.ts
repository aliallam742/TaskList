import { Component } from '@angular/core';
import { SharedModule } from '../../shared/moduels/shared.moduels';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isActive: boolean = false;
  toggleMenu() {
    this.isActive = !this.isActive
    console.log(this.isActive)
  }
}
