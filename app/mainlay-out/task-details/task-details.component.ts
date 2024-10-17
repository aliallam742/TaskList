import { Component, inject, Inject } from '@angular/core';
import { SharedModule } from '../../shared/moduels/shared.moduels';
import { MaterialModule } from '../../shared/moduels/matrial.shared';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainLayoutService } from '../services/main-layout.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  private services = inject(MainLayoutService);
  private snackBar = inject(MatSnackBar);


  taskData: any;
  btnText: string = 'Complete Task'
  taskStatis: string = "incompleted"
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.taskData = data;
    this.taskStatis = this.taskData.completed ? "completed" : this.taskStatis;
    this.btnText = !this.taskData.completed ? this.btnText : "Task is completed"
    console.log(this.taskData)
  }
  submitComplete(event: any, element: any): void {
    const newElement = { ...element, completed: true }
    this.services.updateTask(newElement).subscribe(res => {
      this.snackBar.open('task is completed successfully', 'close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
    })
  }

}
