'use strict'
var Utils = require('../utils.js');

var HomePage = function () {
  var mainTitleSelector = $('.section h1');

  this.isAuthenticated = function () {
    browser.wait(Utils.until.presenceOf(mainTitleSelector), Utils.timeout);
    return mainTitleSelector.isPresent();
  }
}

module.exports = HomePage;