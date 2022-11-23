import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import {Observable, switchMap} from "rxjs";
import {CharacterModel} from "../../models/character.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  constructor(private _charactersService: CharactersService, private _activatedRoute: ActivatedRoute) {
  }

  readonly details$: Observable<CharacterModel> = this._activatedRoute.params.pipe(
    switchMap( data => this._charactersService.getOne(data['id']))
  );
}
