import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this._url + '/' + id);
  }

}
