import { makeTypedFactory } from 'typed-immutable-record';

import { IActionPayload } from '../actions/actionPayload';
import { QuotesActions } from '../actions/quotes.actions';
import { IMeta, IQuote, IQuotes, IMetaRecord, IQuoteRecord, IQuotesRecord } from './quotes.types';
import { INITIAL_QUOTES_STATE, QuotesFactory, MetaFactory } from './quotes.factory';
import { IQuotesApiResponse } from '../shared/quotes-api-response';

export function quotesReducer(state: IQuotesRecord = INITIAL_QUOTES_STATE, action: IActionPayload<IQuotesApiResponse>): IQuotesRecord {

  switch (action.type) {

    case QuotesActions.LOAD_PENDING:
      return state.updateIn(['meta', 'isLoading'], (oldState) => true);

    case QuotesActions.LOAD_COMPLETED:
      return state.update((oldState: IQuotes) => QuotesFactory({
          meta: {
            index: oldState.meta.index,
            total: action.payload.total,
            isLoading: false
          },
          quote: action.payload.quote
      }));

    case QuotesActions.INCREMENT_INDEX:
      return state.update('meta', (oldState: IMeta) => MetaFactory({
          index: (oldState.index + 1 === oldState.total) ? 0 : oldState.index + 1,
          total: oldState.total,
          isLoading: oldState.isLoading
      }));

    case QuotesActions.RESET_INDEX:
      return state.updateIn(['meta', 'index'], (oldState) => 0);

    default:
      return state;
  }
}
