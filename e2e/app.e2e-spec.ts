import { RevistaPage } from './app.po';

describe('revista App', () => {
  let page: RevistaPage;

  beforeEach(() => {
    page = new RevistaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
