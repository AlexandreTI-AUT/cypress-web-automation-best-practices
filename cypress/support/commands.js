Cypress.Commands.add("cadastrarUsuario", (usuario) => {
  cy.get('[data-testid="nome"]').type(usuario.nome);
  cy.get('[data-testid="email"]').type(usuario.email);
  cy.get('[data-testid="password"]').type(usuario.senha);

  cy.get('[data-testid="checkbox"]').check();

  cy.get('[data-testid="cadastrar"]').click();
});
