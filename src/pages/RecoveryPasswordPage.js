'use strict';
// var HomePage = require('../pages/HomePage.js')

var Utils = require('../utils.js');

var RecoveryPasswordPage = function () {
  var loginButtonSelector = element(by.className('button is-primary is-fatty'));
  var emailInputSelector = element(by.name('email'));
  var errorMessageSelector = $('.is-danger');
  var successMessageSelector = $('.is-success');
  var loginPageSelector = element(by.className('text-uppercase text-bold'));

  this.get = function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://app.zenvia.com/signin/recovery');
  }

  this.recoverEmail = function (email) {
    emailInputSelector.sendKeys(email);
    loginButtonSelector.click();
  }

  this.returnToLoginPage = function () {
    loginPageSelector.click();
  }

  this.failMessage = function () {
    browser.wait(Utils.until.presenceOf(errorMessageSelector), Utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessageSelector.getText();
  }

  this.successMessage = function () {
    browser.wait(Utils.until.presenceOf(successMessageSelector), Utils.timeout, 'O elemento successMessage demorou muito para aparecer!');
    return successMessageSelector.getText();
  }

  this.loginPageValidation = function () {
    return browser.getCurrentUrl();
  }

}

module.exports = RecoveryPasswordPage;