describe('Fitur Login OrangeHRM - Tugas 16 Intercept', () => {

    it('Memastikan halaman login memuat branding', () => {
        cy.intercept('GET', '**/core/i18n/messages').as('getMessages')
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait('@getMessages').its('response.statusCode').should('eq', 200)
        cy.get('.orangehrm-login-branding').should('be.visible')
    })

    it('Verifikasi dengan kredensial valid', () => {
      cy.intercept('POST', '**/auth/validate').as('VerifikasiLogin')

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.wait('@VerifikasiLogin').its('response.statusCode').should('be.oneOf', [200, 302])
      cy.url().should('include', '/dashboard/index')
    })

      it('Login gagal dengan username salah', () => {
        cy.intercept('POST', '**/auth/validate').as('invalidusername')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Bulan')
        cy.get('[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.wait('@invalidusername').its('response.statusCode').should('eq', 302)
        cy.url().should('include', '/auth/login')
    })

      it('Login gagal dengan password salah', () => {
        cy.intercept('POST', '**/auth/validate').as('invalidpassword')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('Bulan123')
        cy.get('button[type="submit"]').click()
        cy.wait('@invalidpassword').its('response.statusCode').should('eq', 302)
        cy.url().should('include', '/auth/login')
    })

    it('Gagal login dengan username dan password kosong', () => {
      cy.intercept('POST', '**/auth/validate').as('empty')

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('button[type="submit"]').click()
      cy.get('.oxd-input-group').should('contain', 'Required')
      cy.url().should('include', '/auth/login')
    })
     
    it('Verifikasi link forgot password mengarah ke halaman reset', () => {
     cy.intercept('GET', '**/auth/requestPasswordResetCode').as('Resetpassword')

     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.contains('Forgot your password?').click()  
     cy.wait('@Resetpassword')
     cy.url().should('include', '/requestPasswordResetCode')
    })

})
