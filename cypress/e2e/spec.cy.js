describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.wook.pt/');

    cy.acceptCookies();

    cy.clickOnUserAreaSection();

    cy.clickOnLoginWith('Google');
  });

  it('passes', () => {
    cy.visit('https://www.wook.pt/');

    cy.acceptCookies();

    cy.clickOnUserAreaSection();

    cy.clickOnLogin();

    cy.loginWithGoogle();
  })
})