import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/moduels/shared.moduels';
import { MaterialModule } from '../../shared/moduels/matrial.shared';
import { NgForm } from '@angular/forms';
import { MainLayoutService } from '../services/main-layout.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [SharedModule, MaterialModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  private mainlayoutServices = inject(MainLayoutService)
  private snackBar = inject(MatSnackBar);
  private id = inject(ActivatedRoute).snapshot.queryParams['id'];
  private router = inject(Router);
  data: any;
  btnText: string = 'Create';
  btnIcon: string = "fa fa-solid fa-list";
  ngOnInit() {
    if (this.id != undefined) {
      this.bindingData();
      this.btnText = 'Edit';
      this.btnIcon = "fa fa-solid fa-edit"
    }
  }

  bindingData(): void {
    this.mainlayoutServices.getDataById(this.id).subscribe(res => {
      this.data = res

    })
  }

  login(createTask: NgForm): void {

    if (createTask.invalid) {
      this.markAllAsTouched(createTask);

    } else {
      if (this.btnText === "Create") {
        this.mainlayoutServices.CreateTask(createTask.value).subscribe(res => {
          this.snackBar.open('Task Created Successfully', 'close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        })
      } else {
        const newElement = { ...createTask.value, id: this.id, completed: this.data.completed }
        this.mainlayoutServices.updateTask(newElement).subscribe(res => {
          this.snackBar.open('Updated Successfully', 'close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        })
      }
      this.router.navigate(['allTasks'])

    }


  }
  markAllAsTouched(form: NgForm): void {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    })
  }
}
