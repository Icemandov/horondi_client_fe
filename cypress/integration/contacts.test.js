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

  // it('Check elements at the news page', () => {
  //   cy.get('h1').wait(100).should('exist').and('be.visible');

  //   cy.get('[data-cy="image"]').should('exist').and('be.visible');
  //   cy.get('[data-cy="date"]').should('exist').and('be.visible');
  //   cy.get('[data-cy="newsTitle"]').should('exist').and('be.visible');
  //   cy.get('[data-cy="newsText"]').should('exist').and('be.visible');
  //   cy.get('[data-cy="authorName"]').should('exist').and('be.visible');
  //   cy.get('[data-cy="authorPhoto"]').should('exist').and('be.visible');
  // });

  it('Click to new tab with map', () => {
    cy.get('.mapContainer > a').should('exist').and('be.visible').click();
    cy.window().its('open').should('be.called');
  });
});
