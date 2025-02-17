describe("User CRUD Functional Tests", () => {
    beforeEach(() => {
      cy.visit("/users"); 
    });
  
    it("Creates a new user", () => {
        
      cy.contains("Crear Usuario").click();
      cy.get(".ant-modal-content").should("be.visible");
  
      cy.get('input[id="firstNames"]').type("Juan");
      cy.get('input[id="lastNames"]').type("Pérez");
      cy.get('input[id="rutNumber"]').type("12345678");
      cy.get('input[id="verificationDigit"]').type("K");
      cy.get('input[id="email"]').type("juan@example.com");
      cy.get(".ant-picker").click();
      cy.get(".ant-picker-cell").contains("15").click(); 
      cy.get(".ant-modal-body button[type='button']").click({ force: true });
      cy.contains("Juan");
    });
  
    it("Edits an existing user", () => {
      cy.contains("Juan").parent().find("button").contains("Editar").click();
  
      cy.get('input[id="firstNames"]').clear().type("Juan Carlos");
      cy.get(".ant-modal-body button[type='button']").click({ force: true });
      cy.contains("Carlos");
    });
  
    it("Deletes a user", () => {
      cy.contains("Juan").parent().find("button").contains("Eliminar").click();
      cy.contains("Juan").should("not.exist");
    });
  });
  