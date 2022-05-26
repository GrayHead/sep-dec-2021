import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitt(): void {
    this.userEmitter.emit(this.user);
  }
}
