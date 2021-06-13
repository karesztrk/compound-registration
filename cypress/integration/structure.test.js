describe('Structure', () => {
  it('reflects the change of the export on the structures page', () => {
    cy.visit('/structures');
    cy.get('.content').contains('false');
  });
});
