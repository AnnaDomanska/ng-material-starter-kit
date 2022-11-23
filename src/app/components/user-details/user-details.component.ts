import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import {Observable, switchMap} from "rxjs";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  constructor(private _userService: UserService, private _activatedRoute: ActivatedRoute) {
  }

  readonly details$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getOne(data['id']))
  );
}
