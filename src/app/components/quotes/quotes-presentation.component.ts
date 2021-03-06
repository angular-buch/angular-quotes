import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { IQuote, IMeta } from '../../reducers/types';
import { quotesReducer } from '../../reducers/quotes.reducer';

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
  @Output() loadFirst = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  ngOnInit() {
    if (!this.meta.total) {
      this.loadFirst.emit();
    }
  }
}
