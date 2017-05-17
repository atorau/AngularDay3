import { Day3Page } from './app.po';

describe('day3 App', () => {
  let page: Day3Page;

  beforeEach(() => {
    page = new Day3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
