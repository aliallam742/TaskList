import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SharedModule } from '../shared/moduels/shared.moduels';

@Component({
  selector: 'app-mainlay-out',
  standalone: true,
  imports: [NavBarComponent, SharedModule],
  templateUrl: './mainlay-out.component.html',
  styleUrl: './mainlay-out.component.css'
})
export class MainlayOutComponent {

}
