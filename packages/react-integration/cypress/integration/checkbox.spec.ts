describe('Checkbox Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#checkbox-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/checkbox-demo-nav-link');
  });

  it('Verify first checkbox can be checked', () => {
    cy.get('#check-1')
      .check()
      .should('be.checked');
    cy.get('#check-1')
      .uncheck()
      .should('not.be.checked');
  });

  it('Verify second checkbox can be checked', () => {
    cy.get('#check-2')
      .check()
      .should('be.checked');
    cy.get('#check-2')
      .uncheck()
      .should('not.be.checked');
  });

  it('Verify default label', () => {
    cy.get('label').contains('Controlled CheckBox');
  });

  it('Verify body content', () => {
    cy.get('.pf-c-check__body').contains('This is the body of checkbox #1');
  });

  it('Verify standalone checkbox input', () => {
    cy.get('#standalone-container').within(() => {
      cy.get('div.pf-c-check.pf-m-standalone').should('exist');
    });
    cy.get('#not-standalone-container').within(() => {
      cy.get('div.pf-c-check.pf-m-standalone').should('not.exist');
    });
  });
});
