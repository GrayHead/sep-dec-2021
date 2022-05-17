import {NgModule} from "@angular/core";
import {HomeComponent} from "./app-components/home/home.component";
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
