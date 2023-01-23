
describe('Проверка логики восстановления пароля', function () {
    it('Проверка на то, что отправляется текст для восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('123qwe@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        cy.contains('Форма логина');
     
     
    })
})
 