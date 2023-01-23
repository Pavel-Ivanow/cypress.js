describe('Длинный автотест для https://testqastudio.me/', function () {
    it('Проверка сайта https://testqastudio.me/', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
         cy.get('.search-wrapper > .search-field').type('БРОММС Двухместная кровать');
         cy.get('.search-submit > .razzi-svg-icon > svg').click();
         cy.contains('БРОММС Двухместная кровать');
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.header-search').click();
         cy.get('.search-field').type('КЛЛАРИОН Низкий столик');
         cy.get('.search-submit > .razzi-svg-icon > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').click({force: true});
         cy.get('#billing_first_name').type('name');
         cy.get('#billing_last_name').type('last_name');
         cy.get('#billing_address_1').type('улица 1');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state').type('Москва');
         cy.get('#billing_postcode').type('123123');
         cy.get('#billing_phone').type('+7976545678');
         cy.get('#billing_email').type('qwe@mail.ru');
         cy.get('#place_order').click();
         
         

     })
 })
 