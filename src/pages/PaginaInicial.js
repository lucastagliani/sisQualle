'use strict'
var utils = require('../utils.js');

var PaginaInicial = function () {
  var tituloPrincipal = $('.section h1');

  this.estaLogado = function () {
    browser.wait(utils.until.presenceOf(tituloPrincipal), utils.timeout);
    return tituloPrincipal.isPresent();
  }
}

module.exports = PaginaInicial;