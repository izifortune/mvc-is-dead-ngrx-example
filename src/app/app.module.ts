import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';
//TODO: Import StoreModule
//TODO Import StoreDevtoolsModule @ngrx/store-devtools
//TODO: Declare a reducer and import it

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    //TODO: Add storeModule with the reducer
    //TODO: Instrument the store
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // })
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
