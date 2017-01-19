import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page.component';
import { QuotesPageComponent } from './components/quotes-page.component';
import { QuotesPresentationComponent } from './components/quotes/quotes.component';
import { QuotesActions } from './actions/quotes.actions';
import { QuotesService } from './shared/quotes.service';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuotesPageComponent,
    AboutPageComponent,
    QuotesPresentationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    AppRoutesModule
  ],
  providers: [
    DevToolsExtension,
    NgReduxRouter,
    QuotesActions,
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
