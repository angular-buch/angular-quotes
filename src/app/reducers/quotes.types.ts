import { TypedRecord } from 'typed-immutable-record';

export interface IMeta {
  index: number;
  total: number;
  isLoading: false;
}

export interface IQuote {
  text: string;
  author: string;
  source: string;
}

export interface IQuotes {
  meta: IMeta;
  quote: IQuote;
};

// tslint:disable:no-empty-interface
export interface IMetaRecord extends TypedRecord<IMetaRecord>, IMeta {};
export interface IQuoteRecord extends TypedRecord<IQuoteRecord>, IQuote {};
export interface IQuotesRecord extends TypedRecord<IQuotesRecord>, IQuotes {};
