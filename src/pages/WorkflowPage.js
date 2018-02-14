'use strict'

var LoginPage = require('../pages/LoginPage.js');
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var WorkflowPage = function () {

  var workflowItem = $('.is-fullwidth .is-clickable');
  var menuRight = $('.is-fullwidth .is-hoverable');
  var btnDelete = $('.is-fullwidth .dropdown-item:last-child');
  var btnDeleteConfirm = $('.modal-card-foot .is-danger');
  

  

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

    browser.get('http://app.zenvia.com/home/workflow/');
  }

  // Actions

  this.deleteWorkflow = function () {
    browser.wait(Utils.until.presenceOf(menuRight), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');
    menuRight.click();
    browser.wait(Utils.until.presenceOf(btnDelete), Utils.timeout, 'O elemento btnDelete demorou muito para aparecer!');
    btnDelete.click();
    browser.wait(Utils.until.presenceOf(btnDeleteConfirm), Utils.timeout, 'O elemento btnDeleteConfirm demorou muito para aparecer!');
    btnDeleteConfirm.click();
  }

  this.deleteWorkflowByIndex = function (index) {
    var menuRight = $('.is-fullwidth tr:nth-child(' + index + ') .is-hoverable');
    var btnDelete = $('.is-fullwidth tr:nth-child(' + index + ') .dropdown-item:last-child');

    browser.wait(Utils.until.presenceOf(menuRight), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');
    menuRight.click();
    browser.wait(Utils.until.presenceOf(btnDelete), Utils.timeout, 'O elemento btnDelete demorou muito para aparecer!');
    btnDelete.click();
    browser.wait(Utils.until.presenceOf(btnDeleteConfirm), Utils.timeout, 'O elemento btnDeleteConfirm demorou muito para aparecer!');
    btnDeleteConfirm.click();
  }

  this.existWorkflow = function() {
    return workflowItem.isPresent();
  }
};

module.exports = WorkflowPage;