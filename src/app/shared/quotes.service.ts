import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { IQuote } from './quote';

@Injectable()
export class QuotesService {
  private api: string = '/assets/quotes.json';

  constructor(private http: Http) { }

  get(index: number): Observable<IQuote> {
    return this.http
      .get(this.api)
      .retry(3)
      .map(response => response.json())
      .map(rawData => rawData.quotes)
      .map(quotes => quotes[index]);
  }
}
