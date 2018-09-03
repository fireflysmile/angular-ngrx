import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './views/users/users.module';

const routes: Routes = [
  {
    path: 'users',  loadChildren:() => UsersModule  //loadChildren: './users/users.module#UsersModule'
  },
  {
    path: '**', redirectTo: '/users/sign-in', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
