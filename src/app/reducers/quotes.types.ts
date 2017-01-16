import { TypedRecord } from 'typed-immutable-record';
import { IQuote } from './../shared/quote';

export interface IQuotes {
  lastShownIndex: number;
  quotes: IQuote[];
};

// tslint:disable-next-line:no-empty-interface
export interface IQuotesRecord extends TypedRecord<IQuotesRecord>, IQuotes {
};
