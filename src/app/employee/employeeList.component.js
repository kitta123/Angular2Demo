"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading data. Please wait...';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) {
            console.error(error);
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
    };
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
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'app-employeeList',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.scss'],
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map