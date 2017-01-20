import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';

import { IAppState } from './../reducers/index';
import { QuotesActions } from '../actions/quotes.actions';
import { IMeta, IQuote } from './../reducers/quotes.types';

@Component({
  selector: 'app-quotes-page',
  template: `
    <app-quotes-presentation
      [meta]="meta$ | async"
      [quote]="quote$ | async"
      (loadNext)="actions.loadNext()"
      (reset)="actions.reset()"
    ></app-quotes-presentation>
  `
})
export class QuotesPageComponent   {

  @select((state: IAppState) => state.quotes.meta)
  public meta$: Observable<IMeta>;

  @select((state: IAppState) => state.quotes.quote)
  public quote$: Observable<IQuote>;

  constructor(public actions: QuotesActions) {}
}
