import { TypedRecord } from 'typed-immutable-record';
import { IQuote } from './../shared/quote';
import { IMeta } from './../shared/meta';

export interface IQuotes {
  meta: IMeta;
  quote: IQuote;
};

// tslint:disable-next-line:no-empty-interface
export interface IQuotesRecord extends TypedRecord<IQuotesRecord>, IQuotes {
};
