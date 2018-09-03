import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreModule } from './user-store';


@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],

  declarations: []
})
export class StoresModule { }

