import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('/cadastrarusuarios')

    })
    it('deve cadastrar um novo usuário com sucesso', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();
        const senha = faker.internet.password();

        cy.preencherCadastro(nome, email, senha)

        cy.contains('Cadastro realizado com sucesso')
            .should('be.visible')
    }),
        it('deve exibir mensagem ao tentar cadastrar sem informar o nome', () => {

            const email = faker.internet.email()
            const senha = faker.internet.password()

            cy.preencherCadastro(undefined, email, senha)
            cy.get('[data-testid="nome"]')
                .should('have.attr', 'required')

        })
})