import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RouterEffects])
  ],
  providers:[RouterEffects],
  declarations: []
})
export class RouterStoreModule { }
