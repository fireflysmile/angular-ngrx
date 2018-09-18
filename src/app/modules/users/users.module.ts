import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [SignInComponent]
})
export class UsersModule { }
