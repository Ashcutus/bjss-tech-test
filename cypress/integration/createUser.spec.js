const userName = 'Test Name-' + Cypress._.random(100)
const userSalary = Cypress._.random(20000, 45000)
const userAge = Cypress._.random(18, 65)

describe('Create a new user and confirm the user has been created', () => {
  it('Sends a request and confirms the user was generated', () => {
    const options = {
      "name": userName,
      "salary": userSalary,
      "age": userAge 
    }

    cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create', options)
      .then((response) => {
        expect(response.body.data).to.have.property('name', userName)
        expect(response.body.data).to.have.property('salary', userSalary)
        expect(response.body.data).to.have.property('age', userAge)
      })
  })
})