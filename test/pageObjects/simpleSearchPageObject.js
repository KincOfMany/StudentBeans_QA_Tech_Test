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

  async verifySearchClick() {
    await this.isElementEqualToExpected(
      $("h3=Promoted Offers"),
      "Promoted Offers"
    );
  }

  async enterSearch(str) {
    await $('input[data-testid="search-input"]').clearValue();
    await $('input[data-testid="search-input"]').setValue(str);
    await expect(
      await $('input[data-testid="search-input"]').getValue()
    ).to.equal(str);
  }

  async selectSearchResult(num) {
    let index = num - 1;
    await $("h3=Promoted Offers").waitForExist({ reverse: true });
    await $$('div[data-testid="search_results_row"] div div')[index].click();
  }

  async verifySearchResult(str) {
    let url = await browser.getUrl();
    // console.log(url);
    expect(url.includes(str)).to.equal(true);
  }
}

module.exports = SimpleSearchPageObject;
