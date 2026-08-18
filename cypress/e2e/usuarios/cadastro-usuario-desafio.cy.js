describe('Cadastro de usuário', () => {

    it('cadastro', () => {

        cy.visit('https://front.serverest.dev/cadastrarusuarios')

        cy.get('[data-testid="nome"]')
            .type('Maria Souza')

        cy.get('[data-testid="email"]')
            .type('maria@email.com')

        cy.get('[data-testid="password"]')
            .type('123456')

        cy.get('[data-testid="checkbox"]')
            .check()

        cy.get('[data-testid="cadastrar"]')
            .click()

        cy.wait(5000)

        cy.get('body')
            .should('contain', 'Cadastro realizado com sucesso')

        cy.wait(2000)

    })

})