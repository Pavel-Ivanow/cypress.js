
describe('Проверка на негативный кейс валидации', function () {
    it('Проверка на ввод логина без @ и ввод правильного пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     
     })
 })
 