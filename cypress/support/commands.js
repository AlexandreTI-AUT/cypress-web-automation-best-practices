import { faker } from '@faker-js/faker';

Cypress.Commands.add('preencherCadastro',
  ({
    nome = faker.person.fullName(),
    email = faker.internet.email(),
    senha = faker.internet.password()
  } = {}) => {



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
  })  