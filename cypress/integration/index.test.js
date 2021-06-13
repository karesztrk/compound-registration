describe('Options', () => {
  beforeEach(() => {
    cy.intercept(
      {
        url: '/api/configuration',
      },
      {
        configuration: {
          exportDisabled: true,
        },
      },
    );
  });
  it('display the export toggle', () => {
    cy.visit('/');
    cy.get('label[itemID="export-toggle"]').should('be.visible');
  });
});
