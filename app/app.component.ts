import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainlayOutComponent } from "./mainlay-out/mainlay-out.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainlayOutComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskList';
}
