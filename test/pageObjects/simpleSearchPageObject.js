const ParentPageObject = require("./parentPageObject");

class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url("");
    if ($("button=Accept All Cookies").isDisplayed()) {
      await $("button=Accept All Cookies").click();
    }
  }

  async verifyHomePage() {
    // This no longer seems to be on the homepage
    // await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
    await this.isElementEqualToExpected(
      $("h2=Student deals of the day"),
      "Student deals of the day"
    );
  }

  async clickOnSearch() {
    await $("p=Brands, items or categories").click();
  }

  async verifySearch() {
    await this.isElementEqualToExpected(
      $("h3=Promoted Offers"),
      "Promoted Offers"
    );
  }
}

module.exports = SimpleSearchPageObject;
