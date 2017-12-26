'use strict';
var PaginaLogin = require('../pages/PaginaLogin.js');
var Access = require('./../access.js');

describe('Cenários de testes na PaginaLogin: ', function() {
	var page;
	
	var correctLogin = Access.email;
	var correctPass = Access.pass;
	
	var wrongLogin = 'wrong@login.com'
	var wrongPass = 'wrongPass';

	beforeEach(function(){
		page = new PaginaLogin();
		page.get();
	});
	
	it('1. Página está acessível.', function() {
		expect(browser.getTitle()).toEqual('Zenvia Conversational Cloud');
	});

	it('2. Não deve acessar sem login nem senha.', function() {
		page.login('', '');
		expect(page.failMessage()).toContain('E-mail e senha não podem estarem vazios.');
	});
	
	it ('3. Não deve acessar acessar com login correto mas sem senha', function() {
		page.login(correctLogin, '');
		expect(page.failMessage()).toContain('E-mail e senha não podem estarem vazios.');
	});
	
	it ('4. Não deve acessar acessar sem login mas com senha correta', function() {
		page.login('', correctPass);
		expect(page.failMessage()).toContain('E-mail e senha não podem estarem vazios.');
	});
	
	it ('5. Não deve acessar acessar com login e senha incorretos', function() {
		page.login(wrongLogin, wrongPass);
		expect(page.failMessage()).toContain('Opa! A combinação de e-mail e senha não é válida.');
	});
	
	it ('6. Não deve acessar acessar com login correto e senha incorreta', function() {
		page.login(correctLogin, wrongPass);
		expect(page.failMessage()).toContain('Opa! A combinação de e-mail e senha não é válida.');
	});
	
	it ('7. Não deve acessar acessar com login incorreto e senha correta', function() {
		page.login(wrongLogin, correctPass);		
		expect(page.failMessage()).toContain('Opa! A combinação de e-mail e senha não é válida.');
	});
	
	it ('8. Deve acessar com login e senha corretos', function() {
		page.login(correctLogin, correctPass);
		expect($('.section h1').getText()).toContain('Painel de controle');
	});
	
	// it ('9. Deve retornar página inicial com login e senha corretos', function() {
		// var paginaInicial = page.validLogin();
		// expect(paginaInicial.estaLogado()).toBe(true);
	// });
});