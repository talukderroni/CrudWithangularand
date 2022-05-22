
import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';

 // wrtiteDown all navigationlink

export const appRoutes: Routes = [
  { path: 'employeePage', component: EmployeeComponent },
  { path: 'createempPage', component: CreateEmployeeComponent },
  
];
 