export class IQuotesApiResponse {
  total: number;
  quote: {
    text: string;
    author: string;
    source: string;
  };
}
