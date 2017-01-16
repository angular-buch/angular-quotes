import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [
    DevToolsExtension,
    // NgReduxRouter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
