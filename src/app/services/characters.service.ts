import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterModel } from '../models/character.model';

@Injectable()
export class CharactersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CharacterModel[]> {
    return this._httpClient.get<CharacterModel[]>('https://fedeperin-harry-potter-api-en.herokuapp.com/characters');
  }

  getOne(id: number): Observable<CharacterModel> {
    return this._httpClient.get<CharacterModel>(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${id}`);
  }
}
