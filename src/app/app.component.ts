import { Component, ViewEncapsulation } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import {NgReduxRouter} from 'ng2-redux-router';

import { rootReducer } from './reducers/rootReducer';
import { IAppState } from './reducers/types';
import { middleware, enhancers } from './app.extensibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter
  ) {

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      devTools.isEnabled() ?
        [...enhancers, devTools.enhancer()] :
        enhancers);

    ngReduxRouter.initialize();
  }
}
