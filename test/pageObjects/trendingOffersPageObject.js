const ParentPageObject = require("./parentPageObject");

class TrendingOffersPageObject extends ParentPageObject {
  async goToPage(path) {
    await browser.url(path);
    if ($("button=Accept All Cookies").isDisplayed()) {
      await $("button=Accept All Cookies").click();
    }
  }

  async verifyHomePage() {
    await this.isElementEqualToExpected(
      $("h2=Student deals of the day"),
      "Student deals of the day"
    );
  }

  async clickTrendingNow() {
    await $("a[data-testid='nav-category-trending-now']").click();
  }

  async verifyTrendingNow() {
    let url = await browser.getUrl();
    // not sure if including the query string makes this more fragile but give it shows we got there from the nav bar I want to confirm the path take is as expected
    expect(url.includes("trending-discounts?source=nav")).to.equal(true);
  }

  async selectDiscount(num) {
    let index = num - 1;
    await $$('div[data-testid="grid"] article')[index].click();
  }

  async verifyDiscountSelected() {
    let url = await browser.getUrl();
    // console.log(url);
    expect(url.includes("student-discount")).to.equal(true);
  }
}

module.exports = TrendingOffersPageObject;
