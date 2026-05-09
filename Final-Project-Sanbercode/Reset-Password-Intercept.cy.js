 describe('Fitur Reset Password - OrangeHRM', () => {
    it('TC-01 Verifikasi link forgot password mengarah ke halaman reset', () => {
        cy.intercept('GET', '**/auth/requestPasswordResetCode').as('Resetpassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Forgot your password?').click()  
        cy.wait('@Resetpassword')
        cy.url().should('include', '/requestPasswordResetCode')
    })
    it('TC-02 Berhasil mengirim permintaan reset password', () => {
        cy.intercept('GET', '**//core/i18n/messages').as('resetRequest')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.get('input[name="username"]').type('Admin')
        cy.get('button[type="submit"]').click()
        cy.wait('@resetRequest').its('response.statusCode').should('be.oneOf', [200, 304])

        cy.get('.orangehrm-card-container').should('be.visible')
        cy.contains('Reset Password link sent successfully')
    })

    it('TC-03 Tidak jadi mereset password', () => {
        cy.intercept('POST', '**/auth/requestPasswordReset').as('Gantipassword')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.contains('button', 'Cancel').should('be.visible').click()
        cy.get('.orangehrm-login-slot').should('be.visible')
    })

})
