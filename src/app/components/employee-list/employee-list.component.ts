import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {



  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$
  ]).pipe(
    map(([employees, order]: [EmployeeModel[], string]) => {
      return employees.sort((a, b) => {
        if(a.salary > b.salary) return order === 'asc' ? 1 : -1;
        if(a.salary < b.salary) return order === 'asc' ? -1 : 1;
        return 0;
      })
    })
  );

  public orders: Observable<string[]> = of(['asc', 'desc'])


  constructor(private _employeeService: EmployeeService) {
  }
  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
