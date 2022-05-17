import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this._url);
  }


}
