'use strict'

var LoginPage = require('../pages/LoginPage.js');
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var NewChatbotPage = function () {

  var btnCreateNewSelector = $('.column.is-3');
  var btnCreateChatbotSelector = $('[type="submit"]');
  var chkReceptiveSelector = $('[name="receptiveBot"]');
  var rdbFacebookMessengerSelector = $('#rdbFacebookMessenger');
  var rdbWebChatSelector = $('#rdbWebChat');
  var firstOptionSelector = $('option:enabled');

  var mainTitleSelector = $('.section h1');
  var modalTitleSelector = $('newbot section h1');

  var nameInputSelector = $('#chatbotName');
  var descriptionInputSelector = $('#chatbotDescription');
  
  var chatbotTitleSelector = $('.subtitle.is-4');
  var jsonEditorSelector = $('.jsoneditor-outer');

  var errorMessageSelector = $('.is-danger');

  var pageLogin = new LoginPage();
  var homePage;

  function login() {
    browser.waitForAngularEnabled(false);
    pageLogin.get();
    homePage = pageLogin.validLogin();
    homePage.isAuthenticated();
  }

  this.get = function () {
    if (!homePage || !homePage.isAuthenticated()) {
      login();
    }

    browser.get('http://app.zenvia.com/home/workflow/new');
  }

  // Actions

  this.openModal = function () {
    browser.wait(Utils.until.presenceOf(btnCreateNewSelector), Utils.timeout, 'O elemento btnCreateNew demorou muito para aparecer!');
    btnCreateNewSelector.click();
  }

  this.createNewChatbot = function (nome, descricao) {
    nameInputSelector.sendKeys(nome)
    descriptionInputSelector.sendKeys(descricao);
    btnCreateChatbotSelector.click();
  }

  this.selectReceptive = function () {
    browser.wait(Utils.until.presenceOf(chkReceptiveSelector), Utils.timeout, 'O elemento chkReceptive demorou muito para aparecer!');
    chkReceptiveSelector.click();
  }

  this.selectFacebookChannel = function () {
    browser.wait(Utils.until.presenceOf(rdbFacebookMessengerSelector), Utils.timeout, 'O elemento rdbFacebookMessenger demorou muito para aparecer!');
    rdbFacebookMessengerSelector.click();
  }

  this.selectChatChannel = function () {
    browser.wait(Utils.until.presenceOf(rdbWebChatSelector), Utils.timeout, 'O elemento rdbWebChat demorou muito para aparecer!');
    rdbWebChatSelector.click();
  }

  this.selectFirstFacebookPage = function () {
    browser.wait(Utils.until.presenceOf(firstOptionSelector), Utils.timeout, 'O elemento firstOption demorou muito para aparecer!');
    firstOptionSelector.click();
    return firstOptionSelector.getAttribute('value');
  }

  this.selectFirstChatRoom = function () {
    browser.wait(Utils.until.presenceOf(firstOptionSelector), Utils.timeout, 'O elemento firstOption demorou muito para aparecer!');
    firstOptionSelector.click();
    return firstOptionSelector.getAttribute('value');
  }

  // Text

  this.failMessage = function () {
    browser.wait(Utils.until.presenceOf(errorMessageSelector), Utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessageSelector.getText();
  }

  this.modalTitleText = function () {
    browser.wait(Utils.until.presenceOf(modalTitleSelector), Utils.timeout, 'O elemento modalTitle demorou muito para aparecer!');
    return modalTitleSelector.getText();
  }

  this.chatbotTitleText = function () {
    browser.wait(Utils.until.presenceOf(chatbotTitleSelector), Utils.timeout, 'O elemento chatbotTitle demorou muito para aparecer!');
    return chatbotTitleSelector.getText();
  }

  this.jsonEditorContent = function () {
    browser.wait(Utils.until.presenceOf(jsonEditorSelector), Utils.timeout, 'O elemento jsonEditor demorou muito para aparecer!');
    return jsonEditorSelector.getAttribute("textContent");
  }
};

module.exports = NewChatbotPage;