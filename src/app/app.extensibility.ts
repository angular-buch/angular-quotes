import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';

import { environment } from '../environments/environment';
export let enhancers = [];

// this should be activated with care, because it causes big confusion! :-)
/*
enhancers.push(
  persistState(
    '',
    {
      key: 'angular-quotes'
    })
);
*/

export let middleware = [];

if (!environment.production) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true
    }));
}
