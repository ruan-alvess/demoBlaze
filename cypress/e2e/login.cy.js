describe('Feature Login', () => {

    beforeEach(function () {
        cy.fixture("user").as('dataUser');
        cy.fixture("messages").as('messages');
    });

    it('Login com sucesso', function () {
        cy.login(
            this.dataUser.user, 
            this.dataUser.password
        )
        //A mensagem retornada não condiz com a documentação
        cy.validarTextoVisivel(this.messages.loginSucess)
    });

    it('Login invalido', function () {
        cy.login(
            this.dataUser.user, 
            this.dataUser.passwordInvalid
        )
        cy.validarTextoVisivel(this.messages.loginInvalid)
    });
});