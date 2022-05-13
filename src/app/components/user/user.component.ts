import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  navigateMe(user: IUser) {
    this.router.navigate(['user-details', user.id], {relativeTo: this.activatedRoute, state: {data: user}});
  }
}
