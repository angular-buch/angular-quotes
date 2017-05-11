import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { rootReducer } from './reducers/rootReducer';
import { IAppState } from './reducers/types';
import { middleware, enhancers } from './app.extensibility';


import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page.component';
import { QuotesPageComponent } from './components/quotes-page.component';
import { QuotesPresentationComponent } from './components/quotes/quotes-presentation.component';
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
    AppRoutesModule,
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [
    DevToolsExtension,
    QuotesActions,
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    ngReduxRouter: NgReduxRouter,
    devTools: DevToolsExtension) {

    ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [...enhancers, devTools.enhancer()] : enhancers
    );

    ngReduxRouter.initialize();
  }

}
