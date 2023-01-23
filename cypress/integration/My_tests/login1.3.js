
describe('Проверка на негтивный кейс авторизации', function () {
    it('Проверка на правильный логин и не правильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('111');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
     
     })
 })
 