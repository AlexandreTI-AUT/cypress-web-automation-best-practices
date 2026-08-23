describe("Cadastro de usuário", () => {

 beforeEach(() => {
    
  cy.visit("/cadastrarusuarios");
});


  it("deve cadastrar um novo usuário com sucesso", () => {
   cy.fixture("usuario").then((usuarioFixture) => {
    const usuario = {
  nome: usuarioFixture.nome,
  email: `${usuarioFixture.emailPrefixo}${Date.now()}@email.com`,
  senha: usuarioFixture.senha
};

    cy.cadastrarUsuario(usuario);

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
  });
});
});