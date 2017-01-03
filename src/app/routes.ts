/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {AppComponent} from './app.component';

import {MediaItemFormComponent} from './media-item-form.component';
import {MediaItemListComponent} from './media-item-list.component';

@Component({
  selector: 'fountain-root',
  template: '<fountain-app></fountain-app>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: 'add',
    component: MediaItemFormComponent
  },
  {
    path: ':medium',
    component: MediaItemListComponent
  },
  { path: '',
  redirectTo: '/All',
  pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
