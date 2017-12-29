'use strict';
var PaginaInicial = require('../pages/PaginaInicial.js')

var access = require('./../access.js');
var utils = require('../utils.js');

var PaginaRecuperaSenha = function(){
  var loginButton = element(by.className('button is-primary is-fatty'));
  var emailInput = element(by.name('email'));
  var errorMessage = $('.is-danger');
  var successMessage = $('.is-success');
  var loginPage = element(by.className('text-uppercase text-bold'));

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://app.zenvia.com/signin/recovery');
  }
  
  this.recoverEmail  = function (email) {
    emailInput.sendKeys(email);
    loginButton.click();
  }
  
  this.returnToLoginPage = function (){
	  loginPage.click();
  }
  
  this.failMessage = function () {
    browser.wait(utils.until.presenceOf(errorMessage), utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessage.getText();
  }
  
  this.successMessage = function () {
    browser.wait(utils.until.presenceOf(successMessage), utils.timeout, 'O elemento successMessage demorou muito para aparecer!');
    return successMessage.getText();
  }
  
  this.loginPageValidation = function() {
	return browser.getCurrentUrl();
  }
  
  }

module.exports = PaginaRecuperaSenha;