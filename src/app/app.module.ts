import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { counter } from './reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    StoreModule.forRoot({ counter: counter }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
