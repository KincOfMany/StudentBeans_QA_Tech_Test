const { assert } = require("chai");

class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const errorMessage = "Actual does not match expected";
    assert(
      await expect(await element.getText(), errorMessage).to.equal(expectedText)
    );
  }

  async goToHomePage() {
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

  async enterText(elem, str){
    await elem.clearValue();
    await elem.setValue(str);
    await expect(
      await elem.getValue()
    ).to.equal(str);
  }
}

module.exports = ParentPageObject;
