'use strict';
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var LoginPage = function () {
  var loginButtonSelector = $('#btn-signin');
  var emailInputSelector = $('#signin-email');
  var passwordInputSelector = $('#signin-password');
  var errorMessageSelector = $('.is-danger');

  this.get = function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://app.zenvia.com/signin');
  }

  this.getEmailInput = function () {
    return emailInputSelector;
  }

  this.getPasswordInput = function () {
    return passwordInputSelector;
  }

  this.login = function (email, password) {
    // The line bellow resolve the problem of intermitency: 
    //  Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
    //  Expected 'ERRORS.undefined' to contain 'Opa! A combinação de e-mail e senha não é válida.'.
    browser.sleep(1000);
    emailInputSelector.sendKeys(email)
    passwordInputSelector.sendKeys(password);
    loginButtonSelector.click();
  }

  this.validLogin = function () {
    emailInputSelector.sendKeys(Access.email)
    passwordInputSelector.sendKeys(Access.pass);
    loginButtonSelector.click();
    return new HomePage();
  }

  this.failMessage = function () {
    browser.wait(Utils.until.presenceOf(errorMessageSelector), Utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessageSelector.getText();
  }
}

module.exports = LoginPage;