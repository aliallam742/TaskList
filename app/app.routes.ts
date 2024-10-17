import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', title: "Task List", loadComponent: () => import('./mainlay-out/main-page/main-page.component').then(c => c.MainPageComponent) },
    { path: 'create', title: "create task", loadComponent: () => import('./mainlay-out/create-task/create-task.component').then(c => c.CreateTaskComponent) },
    { path: 'allTasks', title: "all tasks", loadComponent: () => import('./mainlay-out/all-tasks/all-tasks.component').then(c => c.AllTasksComponent) },
    { path: 'completed', title: 'completed tasks', loadComponent: () => import('./mainlay-out/completed-tasks/completed-tasks.component').then(c => c.CompletedTasksComponent) }
];
