import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent {
  readonly list$: Observable<CharacterModel[]> = this._charactersService.getAll();

  constructor(private _charactersService: CharactersService) {
  }
}
