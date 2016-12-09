/// <reference path="../../typings/index.d.ts"/>

import {AppComponent} from './app.component';
import {TestBed, async} from '@angular/core/testing';

describe('app component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });
    TestBed.compileComponents();
  }));
});
