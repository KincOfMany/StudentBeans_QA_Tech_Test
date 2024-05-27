const ParentPageObject = require("./parentPageObject");

class SimpleSearchPageObject extends ParentPageObject {
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
    await this.enterText($('input[data-testid="search-input"]'), str);
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
