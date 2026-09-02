import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {

    it('deve cadastrar um novo usuário com sucesso', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();
        const senha = faker.internet.password();

        cy.visit('https://front.serverest.dev/cadastrarusuarios')

        cy.get('[data-testid="nome"]')
            .type(nome)

        cy.get('[data-testid="email"]')
            .type(email)

        cy.get('[data-testid="password"]')
            .type(senha)

        cy.get('[data-testid="checkbox"]')
            .check()

        cy.get('[data-testid="cadastrar"]')
            .click()


        cy.contains('Cadastro realizado com sucesso')
            .should('be.visible')



    })

})