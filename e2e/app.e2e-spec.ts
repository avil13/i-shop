import { IShopPage } from './app.po';

describe('i-shop App', function() {
  let page: IShopPage;

  beforeEach(() => {
    page = new IShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
