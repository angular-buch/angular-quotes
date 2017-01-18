import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IQuotes } from './../../reducers/quotes.types';

@Component({
  selector: 'app-quotes-presentation',
  template: `
    TODO
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesPresentationComponent {
  @Input() quotes: IQuotes;
  @Output() increment = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
