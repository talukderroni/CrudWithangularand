
import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
 // wrtiteDown all navigationlink

export const appRoutes: Routes = [
  { path: 'employeePage', component: EmployeeComponent },
  { path: 'createempPage', component: CreateEmployeeComponent },
  { path: 'OrderDetails', component: OrderDetailsComponent },
  
];
 