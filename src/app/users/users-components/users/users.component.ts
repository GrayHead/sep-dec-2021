import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../users-services/user-data.service";
import {IUser} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userDataService: UserDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({usersData}) =>
      this.users = usersData);


  }

}
