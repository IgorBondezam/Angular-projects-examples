import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {BookReducer} from "./book/book.reducer";
import { BookListComponent } from './book-list/book-list.component';
import {AppState} from "./app.state";
import {AppRoutingModule} from "./app-routing.module";
import {EffectsModule} from "@ngrx/effects";
import {BookEffects} from "./book/book.effects";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
    imports: [
      StoreModule.forRoot<AppState>({book: BookReducer}),
      EffectsModule.forRoot([BookEffects]),
      BrowserModule,
      RouterOutlet,
      RouterModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
