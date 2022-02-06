/// <reference types="cypress" />
// https://docs.cypress.io/api/introduction/api.html

describe("World images test", () => {

  it("should: load Home page", () => {
    cy.visit("/")
    cy.contains("h1", "Bienvenidos");
    cy.get('[data-cy=invoice-container]').should('not.exist')
  });

  it("should: Show alert dialog for empty input", () => {
    cy.get('[data-cy=input-search]')
    cy.get('[data-cy=btn-submit]').click()
    cy.get('.swal2-html-container').should('contain', 'Para buscar ingresa un palabra')
    cy.get('button.swal2-confirm').click()
  });

  it("should: show alert dialog when not match search criteria", () => {
      cy.wait(500);
      cy.get('[data-cy=input-search]').type('XXXX')
      cy.get('[data-cy=btn-submit]').click()
      cy.get('#swal2-title',{ timeout: 10000 }).should('contain', 'Oops...')
      cy.get('button.swal2-confirm').click()
  });

  it("should: shows images after input valid search", () => {
    cy.get('[data-cy=input-search]').clear()
    cy.wait(500);
    cy.get('[data-cy=input-search]').type('cats')
    cy.get('[data-cy=btn-submit]').click()
    cy.get('figure img').should('have.attr', 'src')
  });

  it("should: upvote after click on icon image", () => {
    cy.get('[data-cy="handleVote"]').first().click()
    cy.get('.container-sellers .card .counter').first().contains('3/20')
  });

});
