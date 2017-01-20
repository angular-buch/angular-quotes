import { makeTypedFactory } from 'typed-immutable-record';

import { IActionPayload } from '../actions/actionPayload';
import { QuotesActions } from '../actions/quotes.actions';
import { IQuotesRecord, IQuotes } from './quotes.types';
import { IQuotesApiResponse } from './../shared/quotes-api-response';


export const QuotesFactory = makeTypedFactory<IQuotes, IQuotesRecord>({
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

const INITIAL_STATE = QuotesFactory();

export function quotesReducer(state: IQuotesRecord = INITIAL_STATE, action: IActionPayload<IQuotesApiResponse>): IQuotesRecord {
return state;
  /*switch (action.type) {

    case QuotesActions.LOAD_PENDING:
      return state.mergeDeep({ meta: { isLoading: true } });

    case QuotesActions.LOAD_COMPLETED:
      return state.update((oldValue) => {
        return {
          meta: {
            index: oldValue.meta.index,
            total: action.payload.total,
            isLoading: false
          },
          quote: action.payload.quote
        };
      });

    case QuotesActions.INCREMENT_INDEX:
      return state.updateIn(['meta', 'index'], (value) => value + 1);

    case QuotesActions.RESET_INDEX:
      return state.updateIn(['meta', 'index'], (value) => 0);

    default:
      return state;
  }*/
}
