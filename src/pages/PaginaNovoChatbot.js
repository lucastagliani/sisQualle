'use strict'

var PaginaLogin = require('../pages/PaginaLogin.js');
var PaginaInicial = require('../pages/PaginaInicial.js');

var access = require('./../access.js');
var utils = require('../utils.js');

var PaginaNovoChatbot = function () {
  var tituloPrincipal = $('.section h1');
  var btnCriarNovo = $('.column.is-3');

  var tituloModal = $('newbot section h1');
  var nameInput = $('#chatbotName');
  var descriptionInput = $('#chatbotDescription');
  var btnCriarChatbot = $('[type="submit"]');
  var errorMessage = $('.is-danger');

  var tituloChatbot = $('h2');

  var pageLogin = new PaginaLogin();
  var paginaInicial;

  function login() {
    browser.waitForAngularEnabled(false);
    pageLogin.get();
    paginaInicial = pageLogin.validLogin();
    paginaInicial.estaLogado();
  }

  this.get = function () {
    if (!paginaInicial || !paginaInicial.estaLogado()) {
      login();
    }

    browser.get('http://app.zenvia.com/home/workflow/new');
  }

  this.abreModal = function () {
    browser.wait(utils.until.presenceOf(btnCriarNovo), utils.timeout, 'O elemento btnCriarNovo demorou muito para aparecer!');
    btnCriarNovo.click();
  }

  this.tituloModalText = function () {
    browser.wait(utils.until.presenceOf(tituloModal), utils.timeout, 'O elemento tituloModal demorou muito para aparecer!');
    return tituloModal.getText();
  }

  this.criarChatbot = function (nome, descricao) {
    nameInput.sendKeys(nome)
    descriptionInput.sendKeys(descricao);
    btnCriarChatbot.click();
  }

  this.failMessage = function () {
    browser.wait(utils.until.presenceOf(errorMessage), utils.timeout, 'O elemento errorMessage demorou muito para aparecer!');
    return errorMessage.getText();
  }

  this.tituloChatbotText = function () {
    browser.wait(utils.until.presenceOf(tituloChatbot), utils.timeout, 'O elemento tituloChatbot demorou muito para aparecer!');
    return tituloChatbot.getText();
  }
};
module.exports = PaginaNovoChatbot;