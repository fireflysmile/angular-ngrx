import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserReducer } from './reducer';
import { UserEffects } from './effects';
import { UserService } from '../../services/user.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserService, UserEffects],
  declarations: []
})
export class UserStoreModule { }
