import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomeComponent},
      {
        path: 'users-page',
        component: UsersComponent,
        // users-page/user-details/:ID
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      }

      // {path: 'user-details/:id', component: UserDetailsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
