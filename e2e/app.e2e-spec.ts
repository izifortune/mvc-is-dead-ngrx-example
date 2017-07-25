import { MvcIsDeadNgrxPage } from './app.po';

describe('mvc-is-dead-ngrx App', () => {
  let page: MvcIsDeadNgrxPage;

  beforeEach(() => {
    page = new MvcIsDeadNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
