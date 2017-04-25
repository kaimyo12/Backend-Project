import { BackendProjPage } from './app.po';

describe('backend-proj App', function() {
  let page: BackendProjPage;

  beforeEach(() => {
    page = new BackendProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
