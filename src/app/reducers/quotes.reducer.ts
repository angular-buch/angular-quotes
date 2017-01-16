import { makeTypedFactory } from 'typed-immutable-record';

import { IActionPayload } from '../actions/actionPayload';
import { QuotesActions } from '../actions/quotes.actions';
import { IQuote } from './../shared/quote';
import { IQuotesRecord, IQuotes } from './quotes.types';


export const QuotesFactory = makeTypedFactory<IQuotes, IQuotesRecord>({
  index: 0,
  quote: null,
  isLoading: false
});

const INITIAL_STATE = QuotesFactory();

export function quotesReducer(state: IQuotesRecord = INITIAL_STATE, action: IActionPayload<IQuote>): IQuotesRecord {

  switch (action.type) {

    case QuotesActions.LOAD_PENDING:
      return state.merge({
        isLoading: true,
      });

    case QuotesActions.LOAD_COMPLETED:
      return state.merge({
        quote: action.payload,
        isLoading: false
      });

    case QuotesActions.INCREMENT_INDEX:
      return state.update('index', (value) => value + 1);

    case QuotesActions.RESET_INDEX:
      return state.update('index', (value) => 0);

    default:
      return state;
  }
}
