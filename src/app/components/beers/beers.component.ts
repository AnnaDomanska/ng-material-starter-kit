import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, combineLatest, Observable, switchMap} from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {
private paginatorModel = {
  pageIndex: 0,
  pageSize: 5,
}
  private _paginatorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.paginatorModel);
  public paginator$: Observable<any> = this._paginatorSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = combineLatest([
    this._activatedRoute.params,
    this.paginator$,
  ]).pipe(
   switchMap(([params, paginator]) => this._beersService.getAll(paginator.pageIndex, paginator.pageSize)
   )
  );


  constructor(private _beersService: BeersService, private _activatedRoute: ActivatedRoute) {
  }

  newPagination(event: any) {
    return this._paginatorSubject.next(event);
  }
}
