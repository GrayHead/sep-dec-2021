import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IUser} from "../../models/IUser";
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(this._url)
      .pipe(
        map(value => value),
        catchError((err) => throwError("asdqwe"))
      );


  }

  getUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(this._url + '/' + id);
  }


}
