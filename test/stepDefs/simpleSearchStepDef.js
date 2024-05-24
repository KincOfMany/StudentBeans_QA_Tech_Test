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
  await simpleSearchPageObject.verifySearchClick();
});

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.enterSearch("Samsung");
});

Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.selectSearchResult(4);
  await simpleSearchPageObject.verifySearchResult("samsung");
});
