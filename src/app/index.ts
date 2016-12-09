import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import {AppComponent} from './app.component';
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemFormComponent} from './media-item-form.component';
import {MediaItemService} from './media-item.service';
import {lookupListToken, lookupLists} from './providers';
import { MockXHRBackend } from './mock-xhr-backend';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    RootComponent,
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
