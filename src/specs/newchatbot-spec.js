'use strict';
var PaginaNovoChatbot = require('../pages/PaginaNovoChatbot.js');
var PaginaLogin = require('../pages/PaginaLogin.js');

var access = require('./../access.js');
var utils = require('../utils.js');

describe('Cenários de testes na PaginaNovoChatbot: ', function() {
	var page;

	beforeAll(function(){
		page = new PaginaNovoChatbot();
    });
    
    beforeEach(function(){
		page.get();
	});
	
	it('1. Página está acessível.', function() {
		expect(browser.getTitle()).toEqual('Zenvia Conversational Cloud');
	});

	it('2. Deve ter o título ao abrir a modal.', function() {        
        page.abreModal();
		expect(page.tituloModalText()).toContain('Novo chatbot');
    });

    it('3. Não deve criar o chatbot sem nome.', function() {        
        page.abreModal();
        page.criarChatbot('', '');
		expect(page.failMessage()).toContain('Por favor, preencha os dados.');
    });

    // it('4. Deve criar o chatbot com nome e sem descrição.', function() {        
    //     page.abreModal();
    //     page.criarChatbot('Meu bot de testes', '');
    // 	expect(page.tituloChatbotText()).toContain('Meu bot de testes'); // TODO: Tá vindo '' ao invés do texto certo
    // });
});