const ParentPageObject = require("./parentPageObject");

class LogInErrorPageObject extends ParentPageObject {
  async clickLogin() {
    await $("a[data-testid='nav-login'").click();
  }

  async verifyLoginPage() {
    await this.isElementEqualToExpected(
      $("p=Log in to your Student Beans account"),
      "Log in to your Student Beans account"
    );
  }

  async enterLogin(email, pass) {
    await this.enterText($('input[id="email"]'), email);
    await this.enterText($('input[id="password"]'), pass);
  }

  async manualClickCaptcha() {
    // 15s is longer than should be needed but as the captcha sometimes asks me to click images I added time to make sure this step doesnt fail from me being slow
    await browser.pause(15000);
  }

  async clickLoginBtn() {
    await expect(await $$("button=Log in")[1].isEnabled()).to.equal(true);
    await $$("button=Log in")[1].click();
  }

  async verifyErrorMessage() {
    await $("div[data-testid='input-alert']").waitForExist();
    expect(
      (await $("div[data-testid='input-alert'] p").getText()).includes(
        "password you entered is incorrect"
      )
    ).to.equal(true);
  }
}
module.exports = LogInErrorPageObject;
