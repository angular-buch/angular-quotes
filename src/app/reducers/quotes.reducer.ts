import { makeTypedFactory } from 'typed-immutable-record';

import { IActionPayload } from '../actions/actionPayload';
import { QuotesActions } from '../actions/quotes.actions';
import { IQuote } from './../shared/quote';
import { IQuotesRecord, IQuotes } from './quotes.types';


export const QuotesFactory = makeTypedFactory<IQuotes, IQuotesRecord>({
  lastShownIndex: 0,
  quotes: []
});

const INITIAL_STATE = QuotesFactory();

export function quotesReducer(state: IQuotesRecord = INITIAL_STATE, action: IActionPayload<IQuote>): IQuotesRecord {

  switch (action.type) {

    case QuotesActions.LOAD:
      return state.set('quotes', action.payload);

    case QuotesActions.INCREMENT_INDEX:
      return state.update('lastShownIndex', (value) => value + 1);

    case QuotesActions.RESET_INDEX:
      return state.update('lastShownIndex', (value) => 0);

    default:
      return state;
  }
}
