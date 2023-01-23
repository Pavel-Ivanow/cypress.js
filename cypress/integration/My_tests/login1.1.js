
describe('Проверка на позитивный кейс авторизации', function () {
   it('Проверка на правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#form > .header').contains('Форма логина');
    
    })
})
