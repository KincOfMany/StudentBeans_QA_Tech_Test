const ParentPageObject = require("./parentPageObject");

class TrendingOffersPageObject extends ParentPageObject {
  async clickTrendingNow() {
    await $("a[data-testid='nav-category-trending-now']").click();
  }

  async verifyTrendingNow() {
    let url = await browser.getUrl();
    // not sure if including the query string makes this more fragile but given it shows we got there from the nav bar I want to confirm the path taken is as expected
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
