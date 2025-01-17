Cypress.Commands.add('login', (user ,password) => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(user);
    cy.get('#loginpassword').type(password);
    cy.get('.btn.btn-primary').contains('Log in').click();
});

Cypress.Commands.add('validarTextoVisivel', (texto) => {
    cy.contains(texto)
        .should('be.visible')
});
Cypress.Commands.add('validarTextoErro', (textoErro) => {
    cy.on('window:alert', (text) => {
        expect(textoErro).to.eq(textoErro);
    });
});