import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('/cadastrarusuarios');
    });

    it('deve cadastrar um novo usuário com sucesso', () => {
        cy.preencherCadastro();

        cy.contains('Cadastro realizado com sucesso')
            .should('be.visible');
    });

    it('deve exibir mensagem ao tentar cadastrar sem informar o nome', () => {
        const email = faker.internet.email();
        const senha = faker.internet.password();

        cy.get('[data-testid="email"]')
            .type(email);

        cy.get('[data-testid="password"]')
            .type(senha);

        cy.get('[data-testid="checkbox"]')
            .check();

        cy.get('[data-testid="cadastrar"]')
            .click();

        cy.get('.alert > :nth-child(2)')
            .should('be.visible')
            .and('contain', 'Nome é obrigatório');
    });

    it.only('deve exibir mensagem ao tentar cadastrar um email inválido', () => {
        // Envia um e-mail inválido aproveitando o custom command
        cy.preencherCadastro({ email: 'email_invalido' });

    });

});

