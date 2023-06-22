describe('Hello world screen test', () => {
  it('check components in the screen', () => {
    cy.visit('/')
    cy.BaseTextField({
      labelText: 'First BaseTextField',
      showHr: true,
      showLabel: true,
      placeholder: 'Placeholder 1',
      index: 0
    })
    cy.BaseTextField({
      labelText: 'Second BaseTextField',
      showHr: true,
      showLabel: true,
      placeholder: 'Placeholder 2',
      index: 1
    })
    cy.BaseTextField({
      placeholder: 'Placeholder 3',
      index: 2
    })
  })
})