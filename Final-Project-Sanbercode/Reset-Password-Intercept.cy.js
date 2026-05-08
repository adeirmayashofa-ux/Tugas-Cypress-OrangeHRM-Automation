 describe('Fitur Reset Password - OrangeHRM', () => {
    it('Verifikasi link forgot password mengarah ke halaman reset', () => {
        cy.intercept('GET', '**/auth/requestPasswordResetCode').as('Resetpassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Forgot your password?').click()  
        cy.wait('@Resetpassword')
        cy.url().should('include', '/requestPasswordResetCode')
    })

    it('Berhasil melakukan reset password dengan username valid', () => {
        cy.intercept('POST', '**/auth/requestPasswordReset').as('Gantipassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.contains('Forgot your password?').click()  
        cy.get('[name="username"]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it('Tidak jadi mereset password', () => {
        cy.intercept('POST', '**/auth/requestPasswordReset').as('Gantipassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.contains('button', 'Cancel').should('be.visible').click()
        cy.get('.orangehrm-login-slot').should('be.visible')
    })

})
