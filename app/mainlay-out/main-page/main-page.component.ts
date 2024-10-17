import { Component } from '@angular/core';
import { SharedModule } from '../../shared/moduels/shared.moduels';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  lists: any = [{ id: 1, title: 'Create Task', router: '/create' }, { id: 2, title: 'All Tasks', router: '/allTasks' }, { id: 3, title: 'Completed Task', router: '/completed' }]

}
