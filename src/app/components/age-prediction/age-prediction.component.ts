import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { AgePredictionService } from '../../services/age-prediction.service';
import { AgePredictionModel } from '../../models/age-prediction.model';

@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  constructor(private _agePredictionService: AgePredictionService, private _activatedRoute: ActivatedRoute) {
  }

  readonly details$: Observable<AgePredictionModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._agePredictionService.getOne(data['name']))
  );
}
