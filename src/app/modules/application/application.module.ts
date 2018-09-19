import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ApplicationComponent,
    children: [
      {
        path: '**', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      }
      ,{
        path: 'detail/:id', component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  declarations: [ApplicationComponent, HomeComponent, DetailComponent]
})
export class ApplicationModule { }
