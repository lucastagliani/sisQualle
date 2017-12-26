'use strict';
var PaginaInicial = require('./PaginaInicial.js')
var Access = require('./../access.js');

var PaginaLogin = function(){
  var loginButton = $('#btn-signin');
  var emailInput = $('#signin-email');
  var passwordInput = $('#signin-password');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://selfservice-hlg.zenvia.com/signin');
  }

  this.getEmailInput = function(){
    return emailInput;
  }

  this.getPasswordInput = function(){
    return passwordInput;
  }

  this.login = function (email, password) {
    emailInput.sendKeys(email)
    passwordInput.sendKeys(password);
    loginButton.click();
	browser.sleep(2500);
  }

  this.validLogin = function() {
    emailInput.sendKeys(Access.email)
    passwordInput.sendKeys(Access.pass);
    loginButton.click();
	browser.sleep(2500);
    return new PaginaInicial();
  }

  this.failMessage = function(){
    return $('.is-danger').getText();
  }
}

module.exports = PaginaLogin;