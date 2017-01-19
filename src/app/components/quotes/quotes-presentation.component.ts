import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { quotesReducer } from '../../reducers/quotes.reducer';
import { IQuotes } from './../../reducers/quotes.types';

@Component({
  selector: 'app-quotes-presentation',
  templateUrl: 'quotes-presentation.component.html',
  styleUrls: ['quotes-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesPresentationComponent implements OnInit {
  @Input() quotes: IQuotes;
  @Output() loadNext = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();


  ngOnInit() {
    if (!this.quotes.quote) {
      this.loadNext.emit();
    }
  }
}
