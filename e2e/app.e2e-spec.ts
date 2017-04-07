import { CrewRosterPage } from './app.po';

describe('crew-roster App', function() {
  let page: CrewRosterPage;

  beforeEach(() => {
    page = new CrewRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
