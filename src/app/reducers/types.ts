import * as si from 'seamless-immutable';

export interface IAppState {
  quotes?: Quotes;
};

export type Quotes = si.Immutable<{
  meta: IMeta;
  quote: IQuote;
}>;

export interface IMeta {
  index: number;
  total: number;
  isLoading: boolean;
}

export interface IQuote {
  text: string;
  author: string;
  source: string;
}
