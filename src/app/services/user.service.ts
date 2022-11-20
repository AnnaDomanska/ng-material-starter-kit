import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: UserModel): Observable<UserModel> {
    // @ts-ignore
    return this._httpClient.post('https://fakestoreapi.com/users', user);
  }
}
