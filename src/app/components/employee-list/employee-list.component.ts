import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {

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

  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();

  private _ageRangeSubject: Subject<string> = new Subject<string>();
  public ageRange$: Observable<string> = this._ageRangeSubject.asObservable();

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$,
    this.ageRange$
  ]).pipe(
    map(([employees, order, ageRange]: [EmployeeModel[], string, any]) => {
      return employees.sort((a, b) => {
        if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
        if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
        return 0;
      }).filter(employee => employee.age >= ageRange.min && employee.age < ageRange.max );
    })
  );



  public orders: Observable<string[]> = of(['asc', 'desc'])



  constructor(private _employeeService: EmployeeService) {
  }
  sort(order: string): void {
    this._orderSubject.next(order);

  }

  selectAgeRange(ageRange: any): void {
    this._ageRangeSubject.next(ageRange);
  }
}
