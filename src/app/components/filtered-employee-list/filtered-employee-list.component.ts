import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, Subject, combineLatest, of} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-filtered-employee-list',
  templateUrl: './filtered-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredEmployeeListComponent {

  public ageRanges = [
    {
      min: 0,
      max: 100,
      text: 'All'
  },
    {
      min: 0,
      max: 20,
      text: '0-20'
    },
    {
      min: 21,
      max: 30,
      text: '21-30'
    },
    {
      min: 31,
      max: 40,
      text: '31-40'
    },
    {
      min: 41,
      max: 50,
      text: '41-50'
    },
    {
      min: 51,
      max: 100,
      text: '51-100'
    }
  ];

  private _ageRangeSubject: Subject<string> = new Subject<string>();
  public ageRange$: Observable<string> = this._ageRangeSubject.asObservable();

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.ageRange$,
  ]).pipe(
    map(([employees, ageRange]: [EmployeeModel[], any]) => {
      return employees.filter(employee => employee.age >= ageRange.min && employee.age < ageRange.max );
    })
  );

  constructor(private _employeeService: EmployeeService) {
  }

  selectAgeRange(ageRange: any): void {
    this._ageRangeSubject.next(ageRange);
  }
}
