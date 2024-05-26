const { Given } = require("@cucumber/cucumber");
const TrendingOffersPageObject = require("../pageObjects/trendingOffersPageObject");
const { When, Then } = require("@wdio/cucumber-framework");

const trendingOffersPageObject = new TrendingOffersPageObject();

Given("I am on {string}", async (url) => {
  await trendingOffersPageObject.goToPage(url);
  await trendingOffersPageObject.verifyHomePage();
});

When("I click on Trending Now offers", async () => {
  await trendingOffersPageObject.clickTrendingNow();
  await trendingOffersPageObject.verifyTrendingNow();
});

Then(
  "I should open the 6th discount within the Trending Now offers list",
  async () => {
    await trendingOffersPageObject.selectDiscount(6);
    await trendingOffersPageObject.verifyDiscountSelected();
  }
);
