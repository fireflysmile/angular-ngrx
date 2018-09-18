import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreModule } from './user-store';
import { RouterStoreModule } from './router-store/router-store.module';


@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    RouterStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],

  declarations: []
})
export class StoresModule { }

