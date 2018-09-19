import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresModule } from './stores';
import { DemoDirective } from './directives/demo.directive';
import { DataService } from './services/data.service';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    StoresModule
  ],
  declarations: [DemoDirective, ClickOutsideDirective, HeaderComponent],
  providers: [DataService],
  exports: [DemoDirective, ClickOutsideDirective, HeaderComponent],
})
export class SharedModule {}
