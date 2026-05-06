class loginPage {
    BukaHalaman(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    VerifyLoginPageDisplay(){
        cy.get('.orangehrm-login-branding').should('be.visible')
        cy.get('.orangehrm-login-title').should('have.text', 'Login')
    }
    InputUsername(username){
        cy.get('[name="username"]').type(username)
    }
    InputPassword(password){
        cy.get('[name="password"]').type(password)
    }
    ClickButtonLogin(){
        cy.get('button[type="submit"]').click()
    }
    AssertionLoginSukses(){
        cy.url().should('include', '/dashboard')
    }
    AssertionErrorInvalid(){
        cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')
    }
    AssertionLoginEmpty(){
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')
    }
    ClickForgotPassword(){
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }
    VerifyForgotPassword(){
        cy.url().should('include', '/requestPasswordResetCode')
        cy.get('.orangehrm-forgot-password-title').should('have.text', 'Reset Password')
    }
}
    export default new loginPage();
