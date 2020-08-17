describe('contacts test', () => {
  it('Click to contacts button', () => {
    cy.visit('/');
    cy.get('[href="/contacts"]').should('exist').and('be.visible').click();
  });

  it('Go to contacts page', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/contacts');
    });
  });

  it('Check elements on the contacts page', () => {
    cy.get('[data-cy="title"]').should('exist').and('be.visible');
    cy.get('[data-cy="wrapper"]').should('exist').and('be.visible');
    cy.get('[data-cy="image"]').should('exist').and('be.visible');
    cy.get('[data-cy="contacts"]').should('exist').and('be.visible');
    cy.get('[data-cy="phone"]').should('exist').and('be.visible');
    cy.get('[data-cy="address"]').should('exist').and('be.visible');
    cy.get('[data-cy="email"]').should('exist').and('be.visible');
  });

  it('Click to new tab with map', () => {
    cy.get('[data-cy="mapLink"]').should('exist').and('be.visible').click();
  });
});
