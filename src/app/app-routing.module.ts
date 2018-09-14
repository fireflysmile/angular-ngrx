import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './modules/users/users.module';
import { ApplicationModule } from './modules/application/application.module';

const routes: Routes = [
  {
    path: 'users',  loadChildren:() => UsersModule  //loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'application',  loadChildren:() => ApplicationModule
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
