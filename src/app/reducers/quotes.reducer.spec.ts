import * as si from 'seamless-immutable';

import { IQuotesApiResponse } from './../shared/quotes-api-response';
import { QuotesActions } from './../actions/quotes.actions';
import { quotesReducer } from './quotes.reducer';
import { Quotes } from './types';

describe('Quotes Reducer', () => {
  let initState: Quotes;
  let nextState: Quotes;

  beforeEach(() => {
    initState = quotesReducer(undefined, { type: 'TEST_INIT'});
    nextState = undefined;
  });

  afterEach(() => {
    expect(si.isImmutable(nextState)).toBe(true);
  });

  it('should have an immutable initial state', () => {
    nextState = initState;
  });

  it('should set isLoading on API call start (LOAD_PENDING)', () => {

    nextState = quotesReducer(initState, { type: QuotesActions.LOAD_PENDING });

    expect(nextState.meta.isLoading).toBe(true);
  });

  it('should update meta and quote on API response (LOAD_COMPLETED)', () => {

    const apiResponse: IQuotesApiResponse =  {
      total: 10,
      quote: {
        text: 'text',
        author: 'author',
        source: 'source'
      }
    };

    nextState = quotesReducer(initState, {
      type: QuotesActions.LOAD_COMPLETED,
      payload: apiResponse
    });

    expect(nextState.meta.index).toBe(initState.meta.index);
    expect(nextState.meta.total).toBe(10);
    expect(nextState.meta.isLoading).toBe(false);
  });

  it('should increment the index (INCREMENT_INDEX)', () => {

    nextState = quotesReducer(initState, { type: QuotesActions.INCREMENT_INDEX });

    expect(nextState.meta.index).toBe(initState.meta.index + 1);
  });

  it('should reset the index (RESET_INDEX)', () => {

    nextState = quotesReducer(initState, { type: QuotesActions.RESET_INDEX });
    expect(nextState.meta.index).toBe(0);
  });
});
