import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresModule } from './stores';
import { DemoDirective } from './directives/demo.directive';
import { DataService } from './services/data.service';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    StoresModule
  ],
  declarations: [DemoDirective, ClickOutsideDirective],
  providers: [DataService],
  exports: [DemoDirective, ClickOutsideDirective],
})
export class SharedModule {}
