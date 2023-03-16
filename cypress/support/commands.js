// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('acceptCookies', () => {
  cy.get('.button.acceptButton.acceptAll').click();
});


Cypress.Commands.add('clickOnUserAreaSection', () => {
  cy.get('button.logged-out').click();
});

Cypress.Commands.add('clickOnLogin', () => {
  cy.get('#login .login').click();
});

Cypress.Commands.add('loginWithGoogle', () => {
  cy.get('.social-buttons-container #btnGoogle').click();
});

Cypress.Commands.add('loginWithApple', () => {
  cy.get('.social-buttons-container #btnGoogle').click();
});

Cypress.Commands.add('loginWithFacebook', () => {
  cy.get('.social-buttons-container #btnGoogle').click();
});

Cypress.Commands.add('clickOnLoginWith', (loginType) => {

  cy.clickOnLogin();

  switch (loginType) {
    case 'Google':
      cy.loginWithGoogle();
      break;
    case 'Apple':
      cy.loginWithApple();
      break;
    case 'Facebook':
      cy.loginWithFacebook();
      break;
    default:
      throw new Error('Login Type not found. Allowed Types are: [Google, Apple, Facebook]')
  }
});

Cypress.Commands.add('reloadPage', () => {
  cy.reload();
});
