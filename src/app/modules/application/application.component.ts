import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class ApplicationComponent {}
