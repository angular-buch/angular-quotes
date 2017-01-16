import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../reducers';
import { QuotesService } from '../shared/quotes.service';

@Injectable()
export class QuotesActions {
  static LOAD = 'LOAD';
  static INCREMENT_INDEX = 'INCREMENT_INDEX';
  static RESET_INDEX = 'RESET_INDEX';

  constructor(private ngRedux: NgRedux<IAppState>, private api: QuotesService) {}

  load() {
    this.api.getAll().subscribe((quotes) => {
      this.ngRedux.dispatch({
        type: QuotesActions.LOAD,
        payload: quotes
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
