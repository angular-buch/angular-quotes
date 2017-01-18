import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select} from 'ng2-redux';

import { QuotesActions } from '../actions/quotes.actions';
import { IQuotes } from '../reducers/quotes.types';

@Component({
  selector: 'app-quotes-page',
  template: `
    Quotes!!
  `
})
export class QuotesPageComponent {
  @select() private counter$: Observable<IQuotes>;

  constructor(private actions: QuotesActions) {}

}
