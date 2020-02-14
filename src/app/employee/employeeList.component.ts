import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'app-employeeList',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.scss'],
})
export class EmployeeListComponent {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage : string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
                error => {
                    console.error(error);
                    this.statusMessage = 'Problem with the service. Please try again after sometime';
                });
    }

    // getEmployees(): void {
    //     this.employees = [
    //         {
    //             code: 'emp101', name: 'Tom', gender: 'Male',
    //             annualSalary: 5500, dateOfBirth: '6/25/1988'
    //         },
    //         {
    //             code: 'emp102', name: 'Alex', gender: 'Male',
    //             annualSalary: 5700.95, dateOfBirth: '6/9/1982'
    //         },
    //         {
    //             code: 'emp103', name: 'Mike', gender: 'Male',
    //             annualSalary: 5900, dateOfBirth: '8/12/1979'
    //         },
    //         {
    //             code: 'emp104', name: 'Mary', gender: 'Female',
    //             annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //         },
    //         {
    //             code: 'emp105', name: 'Nancy', gender: 'Female',
    //             annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //         },
    //     ];
    // }

    // trackByEmpCode(index: number, employee: any): string {
    //     return employee.code;
    // }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}