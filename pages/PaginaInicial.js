'use strict'

var PaginaInicial = function(){
  var tituloPrincipal = $('.section h1');


  this.estaLogado = function(){
    return $('.section h1').isPresent();
  }
}

module.exports = PaginaInicial;