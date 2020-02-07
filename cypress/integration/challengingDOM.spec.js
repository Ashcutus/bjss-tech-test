let blueId,
redId,
greenId

describe('Clicking the Red button changes the ID\'s on the Red, Blue & Green buttons', () => {
  it('Navigates to the test page', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get('a[href="/challenging_dom"]')
      .should('exist')
      .click()
    cy.get('h3')
      .contains('Challenging DOM')
      .should('be.visible')
  })
  it('Stores the original ID of the Blue button', () => {
    cy.get('[class=button]')
      .should('exist')
      .then(($element) => {
        blueId = $element.attr('id')
    })
  })
  it('Stores the original ID of the Red button', () => {
    cy.get('[class="button alert"]')
      .should('exist')
      .then(($element) => {
          redId = $element.attr('id')
      })
  })
  it('Stores the original ID of the Green button', () => {
    cy.get('[class="button success"]')
      .should('exist')
      .then(($element) => {
          greenId = $element.attr('id')
      })
  })
  it('Clicks the Red button', () => {
    cy.get('[class="button alert"]')
      .should('exist')
      .click()
    cy.get('h3')
      .contains('Challenging DOM')
      .should('be.visible')
  })
  it('Checks that the ID of the Blue button has changed', () => {
    cy.get('[class=button]')
    .should('exist')
    .then(($element) => {
        expect($element.attr('id')).not.to.equal(blueId)
    })
  })
  it('Checks that the ID of the Red button has changed', () => {
    cy.get('[class="button alert"]')
    .should('exist')
    .then(($element) => {
      expect($element.attr('id')).not.to.equal(redId)
    })
  })
  it('Checks that the ID of the Green button has changed', () => {
    cy.get('[class="button success"]')
    .should('exist')
    .then(($element) => {
      expect($element.attr('id')).not.to.equal(greenId)
    })
  })
})