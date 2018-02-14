'use strict';
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var LoginPage = function () {
  var loginButton = $('#btn-signin');
  var emailInput = $('#signin-email');
  var passwordInput = $('#signin-password');
  var errorMessage = $('.is-danger');

  this.get = function () {
    browser.waitForAngularEnabled(false);
    browser.get('http://app.zenvia.com/signin');
  }

  this.getEmailInput = function () {
    return emailInput;
  }

  this.getPasswordInput = function () {
    return passwordInput;
  }

  this.login = function (email, password) {
    // The line bellow resolve the problem of intermitency: 
    //  Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
    //  Expected 'ERRORS.undefined' to contain 'Opa! A combinação de e-mail e senha não é válida.'.
    browser.sleep(1000);
    emailInput.sendKeys(email)
    passwordInput.sendKeys(password);
    loginButton.click();
  }

  this.validLogin = function () {
    emailInput.sendKeys(Access.email)
    passwordInput.sendKeys(Access.pass);
    loginButton.click();
    return new HomePage();
  }

  this.failMessage = function () {
    browser.wait(Utils.until.presenceOf(errorMessage), Utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessage.getText();
  }
}

module.exports = LoginPage;