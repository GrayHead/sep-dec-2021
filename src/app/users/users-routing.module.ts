import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users-components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UsersResolver} from "./users-services/resolvers/users.resolver";
import {UserResolver} from "./users-services/resolvers/user.resolver";
import {UserGuard} from "./users-services/guards/user.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canDeactivate:[UserGuard],
    canActivate:[UserGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve: {userData: UserResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
