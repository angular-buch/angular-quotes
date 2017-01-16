import { AngularQuotesPage } from './app.po';

describe('angular-quotes App', function() {
  let page: AngularQuotesPage;

  beforeEach(() => {
    page = new AngularQuotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
