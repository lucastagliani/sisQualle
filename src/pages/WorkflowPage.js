'use strict'

var LoginPage = require('../pages/LoginPage.js');
var HomePage = require('../pages/HomePage.js');

var Access = require('./../access.js');
var Utils = require('../utils.js');

var WorkflowPage = function () {

  var workflowItemSelector = $('.is-fullwidth .is-clickable');
  var menuRightSelector = $('.is-fullwidth .is-hoverable');
  var btnDeleteSelector = $('.is-fullwidth .dropdown-item:last-child');
  var btnDeleteConfirmSelector = $('.modal-card-foot .is-danger');




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

  this.deleteFirstWorkflow = function () {
    browser.wait(Utils.until.presenceOf(menuRightSelector), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');
    menuRightSelector.click();
    browser.wait(Utils.until.presenceOf(btnDeleteSelector), Utils.timeout, 'O elemento btnDelete demorou muito para aparecer!');
    btnDeleteSelector.click();
    browser.wait(Utils.until.presenceOf(btnDeleteConfirmSelector), Utils.timeout, 'O elemento btnDeleteConfirm demorou muito para aparecer!');
    btnDeleteConfirmSelector.click();
  }

  this.deleteWorkflowByIndex = function (index) {
    var menuRight = $('#page-content userbots table.is-fullwidth tbody tr:nth-child(' + index + ') .is-hoverable');
    var btnDelete = $('#page-content userbots table.is-fullwidth tbody tr:nth-child(' + index + ') .dropdown-item:last-child');

    browser.wait(Utils.until.presenceOf(menuRight), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');
    menuRight.click();
    browser.wait(Utils.until.presenceOf(btnDelete), Utils.timeout, 'O elemento btnDelete demorou muito para aparecer!');
    btnDelete.click();
    browser.wait(Utils.until.presenceOf(btnDeleteConfirmSelector), Utils.timeout, 'O elemento btnDeleteConfirm demorou muito para aparecer!');
    btnDeleteConfirmSelector.click();
  }

  this.deleteWorkflowCreatedByTest = function () {
    var menuRight = element(by.cssContainingText('#page-content userbots table.is-fullwidth tbody tr', '[AUTOTEST]'));
    browser.wait(Utils.until.presenceOf(menuRight), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');

    console.log('present: ', browser.isElementPresent(menuRight));
    // console.log('display: ', menuRight.isDisplayed());

    // menuRight.isDisplayed().then(response => console.log('response: ', response));

    var count = 0;
    
    while (browser.isElementPresent(menuRight) && count < 10) {
      console.log('entrou while', count);
      menuRight.element(by.css('.is-hoverable')).click();
      var btnDelete = menuRight.element(by.css('.dropdown-item:last-child'));
      browser.wait(Utils.until.presenceOf(btnDelete), Utils.timeout, 'O elemento btnDelete demorou muito para aparecer!');
      btnDelete.click();
      browser.wait(Utils.until.presenceOf(btnDeleteConfirmSelector), Utils.timeout, 'O elemento btnDeleteConfirm demorou muito para aparecer!');
      btnDeleteConfirmSelector.click();

      this.get();
      menuRight = element(by.cssContainingText('#page-content userbots table.is-fullwidth tbody tr', '[AUTOTEST]'));
      browser.wait(Utils.until.presenceOf(menuRight), Utils.timeout, 'O elemento menuRight demorou muito para aparecer!');
      count++;
    }
  }

  this.existWorkflow = function () {
    return workflowItemSelector.isPresent();
  }
};

module.exports = WorkflowPage;