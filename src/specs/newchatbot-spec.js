'use strict';
var NewChatbotPage = require('../pages/NewChatbotPage.js');

describe('C) Suite case of NewChatbotPage:', function () {
  var page;

  beforeEach(function () {
    page = new NewChatbotPage();
    page.get();
  });

  it('1. Página está acessível.', function () {
    expect(browser.getTitle()).toEqual('Zenvia Conversational Cloud');
  });

  it('2. Deve ter o título ao abrir a modal.', function () {
    page.openModal();
    expect(page.modalTitleText()).toContain('Novo chatbot');
  });

  it('3. Não deve criar o chatbot ativo sem nome.', function () {
    page.openModal();
    page.createNewChatbot('', '');
    expect(page.failMessage()).toContain('Por favor, preencha os dados.');
  });

  it('4. Deve criar o chatbot ativo com nome e sem descrição.', function () {
    var chatbotName = '[AUTOTEST] ATIVO ' + new Date().toLocaleString();
    page.openModal();
    page.createNewChatbot(chatbotName, '');

    expect(page.chatbotTitleText()).toContain(chatbotName);
    expect(page.jsonEditorContent()).toContain(chatbotName);
  });

  it('5. Deve criar o chatbot ativo com nome e com descrição.', function () {
    var chatbotName = '[AUTOTEST] ATIVO ' + new Date().toLocaleString();
    var chatbotDescription = 'Descrição do meu chatbot';
    page.openModal();
    page.createNewChatbot(chatbotName, chatbotDescription);

    expect(page.chatbotTitleText()).toContain(chatbotName);
    expect(page.jsonEditorContent()).toContain(chatbotName);
    expect(page.jsonEditorContent()).toContain(chatbotDescription);
  });

  it('6. Não deve criar o chatbot receptivo sem canal escolhido.', function () {
    var chatbotName = '[AUTOTEST] RECEPTIVO';
    var chatbotDescription = 'Descrição do meu chatbot';
    page.openModal();
    page.selectReceptive();
    page.createNewChatbot(chatbotName, chatbotDescription);

    expect(page.failMessage()).toContain('Por favor, preencha os dados.');
  });

  it('7. Não deve criar o chatbot receptivo de facebook sem página escolhida.', function () {
    var chatbotName = '[AUTOTEST] RECEPTIVO FACEBOOK';
    var chatbotDescription = 'Descrição do meu chatbot';
    page.openModal();
    page.selectReceptive();
    page.selectFacebookChannel();
    page.createNewChatbot(chatbotName, chatbotDescription);

    expect(page.failMessage()).toContain('Por favor, preencha os dados.');
  });

  it('8. Deve criar o chatbot receptivo de facebook com página escolhida.', function () {
    var chatbotName = '[AUTOTEST] RECEPTIVO FACEBOOK';
    var chatbotDescription = 'Descrição do meu chatbot';
    page.openModal();
    page.selectReceptive();
    page.selectFacebookChannel();
    var pageId = page.selectFirstFacebookPage();
    page.createNewChatbot(chatbotName, chatbotDescription);

    expect(page.chatbotTitleText()).toContain(chatbotName);
    expect(page.jsonEditorContent()).toContain(chatbotName);
    expect(page.jsonEditorContent()).toContain(chatbotDescription);
    expect(page.jsonEditorContent()).toContain(pageId);
  });

  it('9. Não deve criar o chatbot receptivo de chat sem sala escolhido.', function () {
    var chatbotName = '[AUTOTEST] RECEPTIVO CHAT';
    var chatbotDescription = 'Descrição do meu chatbot';
    page.openModal();
    page.selectReceptive();
    page.selectChatChannel();
    page.createNewChatbot(chatbotName, chatbotDescription);

    expect(page.failMessage()).toContain('Por favor, preencha os dados.');
  });

  // TODO: replace não está funcionando (não deve ser desse jeito?)
  // it('10. Deve criar o chatbot receptivo de chat com sala escolhida.', function () {
  //   var chatbotName = '[AUTO TESTES] CHATBOT RECEPTIVO CHAT';
  //   var chatbotDescription = 'Descrição do meu chatbot';
  //   page.openModal();
  //   page.selectReceptive();
  //   page.selectChatChannel();
  //   var roomId = page.selectFirstChatRoom();
  //   page.createNewChatbot(chatbotName, chatbotDescription);

  //   expect(page.chatbotTitleText()).toContain(chatbotName);
  //   expect(page.jsonEditorContent()).toContain(chatbotName);
  //   expect(page.jsonEditorContent()).toContain(chatbotDescription);
  //   expect(page.jsonEditorContent()).toContain(roomId.replace('1: ', ''));
  // });
});
