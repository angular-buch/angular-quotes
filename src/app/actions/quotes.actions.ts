import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../reducers';
import { QuotesService } from '../shared/quotes.service';

@Injectable()
export class QuotesActions {
  static LOAD_PENDING = 'LOAD_PENDING';
  static LOAD_COMPLETED = 'LOAD_COMPLETED';
  static INCREMENT_INDEX = 'INCREMENT_INDEX';
  static RESET_INDEX = 'RESET_INDEX';

  constructor(private ngRedux: NgRedux<IAppState>, private api: QuotesService) {}

  load() {
    this.ngRedux.dispatch({
      type: QuotesActions.LOAD_PENDING
    });

    this.api.get(0).subscribe((quote) => {
      this.ngRedux.dispatch({
        type: QuotesActions.LOAD_COMPLETED,
        payload: quote
      });
    });
  }

  incrementIndex() {
    this.ngRedux.dispatch({ type: QuotesActions.INCREMENT_INDEX });
  }

  resetIndex() {
    this.ngRedux.dispatch({ type: QuotesActions.RESET_INDEX });
  }
}
