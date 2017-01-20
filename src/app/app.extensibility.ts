// no ES6 import available
const createLogger = require('redux-logger');
const persistState = require('redux-localstorage');

import { IAppState, rootReducer, deimmutify, reimmutify } from './reducers';
import { environment } from '../environments/environment';

export let middleware = [];

// this should not be activated during development, because it causes big confusion! :-)
/*
export let enhancers = [
  persistState(
    '',
    {
      key: 'angular-quotes',
      serialize: store => JSON.stringify(deimmutify(store)),
      deserialize: state => reimmutify(JSON.parse(state)),
    })
];
*/

export let enhancers = [];

if (!environment.production) {
  middleware.push(
    createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify,
  }));
}
