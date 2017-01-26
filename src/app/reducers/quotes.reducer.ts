import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Immutable } from 'seamless-immutable';
import * as si from 'seamless-immutable';

import { IActionPayload } from '../actions/actionPayload';
import { QuotesActions } from '../actions/quotes.actions';
import { Quotes, IMeta, IQuote } from './types';
import { IQuotesApiResponse } from '../shared/quotes-api-response';

const INITIAL_QUOTES_STATE: Quotes = si.from({
  meta: {
    index: 0,
    total: 0,
    isLoading: false
  },
  quote: {
    text: '',
    author: '',
    source: ''
  }
});

export function quotesReducer(state: Quotes = INITIAL_QUOTES_STATE, action: IActionPayload<IQuotesApiResponse>): Quotes {

  switch (action.type) {

    case QuotesActions.LOAD_PENDING:
      return state.setIn(['meta', 'isLoading'], true);

    case QuotesActions.LOAD_COMPLETED:
      return state
        .update('meta', (oldState: IMeta) => {
          return {
            index: oldState.index,
            total: action.payload.total,
            isLoading: false
          };
        })
        .set('quote', action.payload.quote);

    case QuotesActions.INCREMENT_INDEX:
      return state
        .update('meta', (oldState: IMeta) => {
          return {
            index: (oldState.index + 1 === oldState.total) ? 0 : oldState.index + 1,
            total: oldState.total,
            isLoading: oldState.isLoading
          };
        }) as any; // :-(

    case QuotesActions.RESET_INDEX:
      return state.setIn(['meta', 'index'], 0);

    default:
      return state;
  }
}
