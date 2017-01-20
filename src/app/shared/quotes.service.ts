import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { IQuotesApiResponse } from './quotes-api-response';

@Injectable()
export class QuotesService {
  private api: string = 'https://angular-buch.com/angular-quotes/assets/quotes.json';

  constructor(private http: Http) { }

  get(index: number): Observable<IQuotesApiResponse> {
    return this.http
      .get(this.api)
      .retry(3)
      .map(response => response.json())
      .map((rawData) => {
        return {
          total: rawData.quotes.length,
          quote: rawData.quotes[index]
        };
      });
    }
}
