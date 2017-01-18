import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IQuote } from './../../reducers/quotes.types';

@Component({
  selector: 'app-quotes-presentation',
  template: `
    <div class="flex">

      <rio-button className="col-2"
        (click)="increment.emit()"
        testid="counter-incrementButton">
        +
      </rio-button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesPresentationComponent {
  @Input() counter: IQuote;
  @Output() increment = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
