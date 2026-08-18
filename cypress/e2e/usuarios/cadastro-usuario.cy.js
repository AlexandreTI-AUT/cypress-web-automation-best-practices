describe('Cadastro de usuário', () => {

    it('deve cadastrar um novo usuário com sucesso', () => {

        cy.visit('https://front.serverest.dev/cadastrarusuarios')

        cy.get('[data-testid="nome"]')
            .type('João da Silva')

        cy.get('[data-testid="email"]')
            .type('joao@email.com')

        cy.get('[data-testid="password"]')
            .type('123456')

        cy.get('[data-testid="checkbox"]')
            .check()

        cy.get('[data-testid="cadastrar"]')
            .click()

        cy.contains('Cadastro realizado com sucesso')
            .should('be.visible')

    })

})