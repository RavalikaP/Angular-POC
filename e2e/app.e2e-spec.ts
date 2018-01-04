import { ExpensesAppPage } from './app.po';

describe('expenses-app App', () => {
  let page: ExpensesAppPage;

  beforeEach(() => {
    page = new ExpensesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to expCal!!');
  });
});
