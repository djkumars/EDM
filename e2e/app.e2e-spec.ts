import { EdmPage } from './app.po';

describe('edm App', () => {
  let page: EdmPage;

  beforeEach(() => {
    page = new EdmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
