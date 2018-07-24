import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '@app/employee/employee.component';
import { SharedModule } from '@app/shared';
import { EditEmployeeComponent } from '@app/employee/edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutes } from '@app/employee/employee.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeRoutes,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  declarations: [EmployeeComponent, EditEmployeeComponent]
})
export class EmployeeModule {}
