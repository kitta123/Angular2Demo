import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.scss']
})
export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }

}