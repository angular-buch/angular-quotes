import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from './../reducers/types';
import { QuotesService } from '../shared/quotes.service';

@Injectable()
export class QuotesActions {
  static LOAD_PENDING = 'LOAD_PENDING';
  static LOAD_COMPLETED = 'LOAD_COMPLETED';
  static INCREMENT_INDEX = 'INCREMENT_INDEX';
  static RESET_INDEX = 'RESET_INDEX';

  constructor(private ngRedux: NgRedux<IAppState>, private api: QuotesService) {}

  private load() {
    this.ngRedux.dispatch({
      type: QuotesActions.LOAD_PENDING
    });

    const index = this.ngRedux.getState().quotes.meta.index;

    this.api.get(index).subscribe((apiResponse) => {
      this.ngRedux.dispatch({
        type: QuotesActions.LOAD_COMPLETED,
        payload: apiResponse
      });
    });
  }

  loadFirst() {
    this.load();
  }

  loadNext() {
    this.ngRedux.dispatch({ type: QuotesActions.INCREMENT_INDEX });
    this.load();
  }

  reset() {
    this.ngRedux.dispatch({ type: QuotesActions.RESET_INDEX });
    this.load();
  }
}
