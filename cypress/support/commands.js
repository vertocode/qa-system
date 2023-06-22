// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @function BaseTextField
 * @memberOf cy
 */
Cypress.Commands.add('BaseTextField', props => {
    const { labelText, placeholder, showLabel, showHr, index } = props

    const BaseLabel = () => {
        cy.get('[data-cy=label]').should(showLabel ? 'exist' : 'not.exist')
        if (!showLabel) {
            return
        }
        cy.get('[data-cy=label]').should(labelText ? 'contain' : 'not.contain', labelText)
    }
    const BaseInput = () => {
        cy.get(`input[placeholder="${placeholder}"]`).should(placeholder ? 'exist' : 'not.exist')
    }
    const BaseHR = () => {
        cy.get('[data-cy=hr]').should(showHr ? 'exist' : 'not.exist')
    }

    cy.get('[data-cy=base-text-field]').eq(index).within(() => {
        // Others component testing.
        BaseLabel()
        BaseInput()
        BaseHR()

        // TODO: Common assertions here.
        cy.get('[data-cy=input]').type('test')

    })
})