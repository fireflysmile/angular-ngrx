import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApplicationModule } from './modules/application/application.module';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './modules/users/users.module';

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
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
