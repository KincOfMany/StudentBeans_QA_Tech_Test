const { Given } = require("@cucumber/cucumber");
const SimpleSearchPageObject = require("../pageObjects/simpleSearchPageObject");
const { When, Then } = require("@wdio/cucumber-framework");

const simpleSearchPageObject = new SimpleSearchPageObject();

Given("I am on the studentbeans homepage", async () => {
  await simpleSearchPageObject.goToHomePage();
  await simpleSearchPageObject.verifyHomePage();
});

Given("I open the search bar", async () => {
  await simpleSearchPageObject.clickOnSearch();
  await simpleSearchPageObject.verifySearch();
});

When('I enter "Samsung"', async () => {
  return 'I enter "Samsung"';
});

Then('I should select the 4th "Samsung" search listing', async () => {
  return 'I should select the 4th "Samsung" search listing';
});
