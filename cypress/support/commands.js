Cypress.Commands.add('login', (user ,password) => {
    cy.visit('/login')
    cy.get('#model_Login').type(user);
    cy.get('#model_Password').type(password);
    cy.get('.v-card__actions > button.v-btn').click();
});

Cypress.Commands.add('validarTextoVisivel', (texto) => {
    cy.contains(texto)
        .should('be.visible')
});
