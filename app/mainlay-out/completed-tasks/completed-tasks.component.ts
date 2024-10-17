import { Component, inject, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/moduels/shared.moduels';
import { MaterialModule } from '../../shared/moduels/matrial.shared';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MainLayoutService } from '../services/main-layout.service';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css'
})
export class CompletedTasksComponent {
  private services = inject(MainLayoutService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  displayedColumns: string[] = ["id", "name", 'date', 'Completed', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.services.getTasks().subscribe(res => {
      this.dataSource.data = res.filter((e: { completed: any; }) => e.completed);
      this.dataSource.paginator = this.paginator;
    });
  }
  submitComplete(event: any, element: any): void {
    const newElement = { ...element, completed: event.checked }
    this.services.updateTask(newElement).subscribe(res => {
      let message = event.checked === true ? 'task is completed successfully' : " task is not Completed yet !"
      this.snackBar.open(message, 'close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      this.getTasks()
    })
  }
  deleteItem(id: string): void {
    this.services.Delete(id).subscribe(res => {
      this.snackBar.open("Task Deleted Successfully", 'close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      this.getTasks()
    })
  }
  openDialog(element: any) {
    console.log('hi')
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTasks()
    });
  }
}
