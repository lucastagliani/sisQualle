'use strict'
var Utils = require('../utils.js');

var HomePage = function () {
  var mainTitle = $('.section h1');

  this.isAuthenticated = function () {
    browser.wait(Utils.until.presenceOf(mainTitle), Utils.timeout);
    return mainTitle.isPresent();
  }
}

module.exports = HomePage;