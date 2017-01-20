import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { quotesReducer } from '../../reducers/quotes.reducer';
import { IMeta } from './../../shared/meta';
import { IQuote } from './../../shared/quote';

@Component({
  selector: 'app-quotes-presentation',
  templateUrl: 'quotes-presentation.component.html',
  styleUrls: ['quotes-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesPresentationComponent implements OnInit {
  @Input() quote: IQuote;
  @Input() meta: IMeta;

  @Output() loadNext = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  ngOnInit() {
    if (!this.meta.total) {
      this.loadNext.emit();
    }
  }
}
