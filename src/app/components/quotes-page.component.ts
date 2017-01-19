import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';

import { QuotesActions } from '../actions/quotes.actions';
import { IQuotes } from '../reducers/quotes.types';

@Component({
  selector: 'app-quotes-page',
  template: `
    <app-quotes-presentation
      [quotes]="quotes$ | async"
      (loadNext)="actions.loadNext()"
      (reset)="actions.reset()"
    ></app-quotes-presentation>
  `
})
export class QuotesPageComponent   {
  @select() public quotes$: Observable<IQuotes>;

  constructor(public actions: QuotesActions) {}


}
