import { faker } from "@faker-js/faker";

describe("Cadastro de usuário", () => {
  it("deve cadastrar um novo usuário com sucesso", () => {
    const usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: "123456",
    };

    cy.visit("https://front.serverest.dev/cadastrarusuarios");

    cy.get('[data-testid="nome"]').type(usuario.nome);

    cy.get('[data-testid="email"]').type(usuario.email);

    cy.get('[data-testid="password"]').type(usuario.senha);

    cy.get('[data-testid="checkbox"]').check();

    cy.get('[data-testid="cadastrar"]').click();

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
  });
});
