
describe('Проверка на негативный кейс авторизации', function () {
    it('Проверка на не правильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('ger@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
         cy.get('#exitMessageButton > .exitIcon').click();
     
     })
 })
 