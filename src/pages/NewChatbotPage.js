'use strict'

var LoginPage = require('../pages/LoginPage.js');
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var NewChatbotPage = function () {

  var btnCreateNew = $('.column.is-3');
  var btnCreateChatbot = $('[type="submit"]');
  var chkReceptive = $('[name="receptiveBot"]');
  var rdbFacebookMessenger = $('#rdbFacebookMessenger');
  var rdbWebChat = $('#rdbWebChat');
  var firstOption = $('option:enabled');

  var mainTitle = $('.section h1');
  var modalTitle = $('newbot section h1');

  var nameInput = $('#chatbotName');
  var descriptionInput = $('#chatbotDescription');
  
  var chatbotTitle = $('.subtitle.is-4');
  var jsonEditor = $('.jsoneditor-outer');

  var errorMessage = $('.is-danger');

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
    browser.wait(Utils.until.presenceOf(btnCreateNew), Utils.timeout, 'O elemento btnCreateNew demorou muito para aparecer!');
    btnCreateNew.click();
  }

  this.createNewChatbot = function (nome, descricao) {
    nameInput.sendKeys(nome)
    descriptionInput.sendKeys(descricao);
    btnCreateChatbot.click();
  }

  this.selectReceptive = function () {
    browser.wait(Utils.until.presenceOf(chkReceptive), Utils.timeout, 'O elemento chkReceptive demorou muito para aparecer!');
    chkReceptive.click();
  }

  this.selectFacebookChannel = function () {
    browser.wait(Utils.until.presenceOf(rdbFacebookMessenger), Utils.timeout, 'O elemento rdbFacebookMessenger demorou muito para aparecer!');
    rdbFacebookMessenger.click();
  }

  this.selectChatChannel = function () {
    browser.wait(Utils.until.presenceOf(rdbWebChat), Utils.timeout, 'O elemento rdbWebChat demorou muito para aparecer!');
    rdbWebChat.click();
  }

  this.selectFirstFacebookPage = function () {
    browser.wait(Utils.until.presenceOf(firstOption), Utils.timeout, 'O elemento firstOption demorou muito para aparecer!');
    firstOption.click();
    return firstOption.getText();
  }

  this.selectFirstChatRoom = function () {
    browser.wait(Utils.until.presenceOf(firstOption), Utils.timeout, 'O elemento firstOption demorou muito para aparecer!');
    firstOption.click();
    return firstOption.getAttribute('value');
  }

  // Text

  this.failMessage = function () {
    browser.wait(Utils.until.presenceOf(errorMessage), Utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessage.getText();
  }

  this.modalTitleText = function () {
    browser.wait(Utils.until.presenceOf(modalTitle), Utils.timeout, 'O elemento modalTitle demorou muito para aparecer!');
    return modalTitle.getText();
  }

  this.chatbotTitleText = function () {
    browser.wait(Utils.until.presenceOf(chatbotTitle), Utils.timeout, 'O elemento chatbotTitle demorou muito para aparecer!');
    return chatbotTitle.getText();
  }

  this.jsonEditorContent = function () {
    browser.wait(Utils.until.presenceOf(jsonEditor), Utils.timeout, 'O elemento jsonEditor demorou muito para aparecer!');
    return jsonEditor.getAttribute("textContent");
  }
};

module.exports = NewChatbotPage;