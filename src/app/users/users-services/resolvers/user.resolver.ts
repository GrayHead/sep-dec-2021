import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserDataService} from "../user-data.service";
import {IUser} from "../../../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {


  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let {id} = route.params;
    return this.userService.getUser(id);
  }


}
