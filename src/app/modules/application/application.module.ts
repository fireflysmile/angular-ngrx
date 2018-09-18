import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, DetailComponent]
})
export class ApplicationModule { }
