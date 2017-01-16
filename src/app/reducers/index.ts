import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import { quotesReducer, QuotesFactory } from './quotes.reducer';
import { IQuotes } from './quotes.types';

export interface IAppState {
  quotes?: IQuotes;
};

export const rootReducer = combineReducers<IAppState>({
  quotes: quotesReducer,
  router: routerReducer
});

export function deimmutify(store) {
  return {
    quotes: store.quotes.toJS(),
    router: store.router
  };
}

export function reimmutify(plain) {
  return {
    quotes: QuotesFactory(plain.quotes),
    router: plain.router
  };
}
