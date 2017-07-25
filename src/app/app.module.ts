import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';
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
    //TODO: Add storeModule
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
