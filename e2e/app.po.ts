import { browser, by, element } from 'protractor';

export class ExpensesAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('expCal-root h1')).getText();
  }
}
