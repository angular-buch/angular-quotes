import { AboutPageComponent } from './pages/about-page.component';
import { QuotesPageComponent } from './pages/quotes-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuotesPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AppRoutesModule
  ],
  providers: [
    DevToolsExtension,
    NgReduxRouter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
