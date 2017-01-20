import { makeTypedFactory } from 'typed-immutable-record';
import {
  IMeta,
  IQuote,
  IQuotes,
  IMetaRecord,
  IQuoteRecord,
  IQuotesRecord
} from './quotes.types';

const MetaFactory = makeTypedFactory<IMeta, IMetaRecord>({
  index: 0,
  total: 0,
  isLoading: false
});

const QuoteFactory = makeTypedFactory<IQuote, IQuoteRecord>({
  text: '',
  author: '',
  source: ''
});

const INITIAL_META_STATE = MetaFactory();
const INITIAL_QUOTE_STATE = QuoteFactory();

export const QuotesFactory = makeTypedFactory<IQuotes, IQuotesRecord>({
  meta: INITIAL_META_STATE,
  quote: INITIAL_QUOTE_STATE
});

export const INITIAL_QUOTES_STATE = QuotesFactory();
