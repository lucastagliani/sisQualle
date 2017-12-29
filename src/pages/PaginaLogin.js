'use strict';
var PaginaInicial = require('./paginaInicial.js');

var access = require('./../access.js');
var utils = require('../utils.js');

var PaginaLogin = function () {
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
    emailInput.sendKeys(email)
    passwordInput.sendKeys(password);
    loginButton.click();
  }

  this.validLogin = function () {
    emailInput.sendKeys(access.email)
    passwordInput.sendKeys(access.pass);
    loginButton.click();
    return new PaginaInicial();
  }

  this.failMessage = function () {
    browser.wait(utils.until.presenceOf(errorMessage), utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessage.getText();
  }
}

module.exports = PaginaLogin;