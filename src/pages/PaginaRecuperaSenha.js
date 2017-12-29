'use strict';
var PaginaInicial = require('../pages/PaginaInicial.js')
var Access = require('./../access.js');
var utils = require('../utils.js');

var PaginaRecuperaSenha = function(){
  var loginButton = element(by.className('button is-primary is-fatty'));
  var emailInput = element(by.name('email'));

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://app.zenvia.com/signin/recovery');
  }
  
  this.recoverEmail  = function (email) {
    emailInput.sendKeys(email);
    loginButton.click();
	browser.sleep(2500);
  }
  
  this.failMessage = function(){
    return $('.is-danger').getText();
  }
  
  }

module.exports = PaginaRecuperaSenha;