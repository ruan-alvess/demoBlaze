describe('Feature Login', () => {

    beforeEach(function () {
        cy.fixture("user").as('dataUser');
        cy.fixture("messages").as('messages');
        cy.visit('/');
    });
    it('Login com sucesso', function () {
        cy.login(
            this.dataUser.user, 
            this.dataUser.password
        );
        cy.validarTextoVisivel(this.messages.loginSucess)
    });

    it('Login invalido', function () {
        cy.login(
            this.dataUser.user, 
            this.dataUser.passwordInvalid
        );
        cy.validarTextoErro(this.messages.loginInvalid)
    });
});