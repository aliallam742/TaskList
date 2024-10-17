import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MainLayoutService } from '../services/main-layout.service';
import { SharedModule } from '../../shared/moduels/shared.moduels';
import { MaterialModule } from '../../shared/moduels/matrial.shared';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent implements OnInit {
  private services = inject(MainLayoutService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  private route = inject(Router)
  displayedColumns: string[] = ["id", "name", 'date', 'Completed', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.services.getTasks().subscribe(res => {
      this.dataSource.data = res;
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
  redirectToCreate(element: any): void {
    this.route.navigate(['create'], { queryParams: { id: element.id } });
  }
}
