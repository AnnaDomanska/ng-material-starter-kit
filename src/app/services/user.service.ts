import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: { password: any; address: { zipcode: any; number: any; city: any; street: any }; phone: any; name: { firstname: any; lastname: any }; email: any; username: any }): Observable<UserModel> {
    // @ts-ignore
    return this._httpClient.post('https://fakestoreapi.com/users', user);
  }

  getOne(id: number): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://fakestoreapi.com/users/${id}`);
  }
}
