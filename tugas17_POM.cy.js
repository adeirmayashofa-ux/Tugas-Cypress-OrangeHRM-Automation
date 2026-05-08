import LoginData from "../fixtures/LoginData.json"
import loginPage from "../support/Loginpage.js"

describe('Fitur Login OrangeHRM', () => {
  it('TC_LOGIN_001 - Memastikan halaman login dapat dimuat dan link dapat diakses', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/')
    //cy.get('.orangehrm-login-branding').should('be.visible')
    //cy.get('.orangehrm-login-title').should('have.text', 'Login')

    loginPage.BukaHalaman()
    loginPage.VerifyLoginPageDisplay()
  })

  it('TC_LOGIN_002 - Verifikasi login dengan kredensial valid', () => {
    //cy.get('[name="username"]').type('Admin')
    //cy.get('[name="password"]').type('admin123')
    //cy.get('button[type="submit"]').click()
    //cy.url().should('include', '/dashboard')

    loginPage.BukaHalaman()
    loginPage.InputUsername(LoginData.ValidUsername)
    loginPage.InputPassword(LoginData.ValidPassword)
    loginPage.ClickButtonLogin()
    loginPage.AssertionLoginSukses()
    
  })
  it('TC_LOGIN_003 - Verifikasi Login gagal dengan username salah', () => {
    //cy.get('[name="username"]').type('Bulan')
    //cy.get('[name="password"]').type('admin123')
    //cy.get('button[type="submit"]').click()
    //cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')

    loginPage.BukaHalaman()
    loginPage.InputUsername(LoginData.InvalidUsername)
    loginPage.InputPassword(LoginData.ValidPassword)
    loginPage.ClickButtonLogin()
    loginPage.AssertionErrorInvalid()
  })
  it('TC_LOGIN_004 - Verifikasi Login gagal dengan password salah', () => {
    //cy.get('[name="username"]').type('Admin')
    //cy.get('[name="password"]').type('Bulan123')
    //cy.get('button[type="submit"]').click()
    //cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')

    loginPage.BukaHalaman()
    loginPage.InputUsername(LoginData.ValidUsername)
    loginPage.InputPassword(LoginData.InvalidPassword)
    loginPage.ClickButtonLogin()
    loginPage.AssertionErrorInvalid()
  })
   it('TC_LOGIN_005 - Verifikasi Login gagal dengan username kosong', () => {
    //cy.get('[name="password"]').type('admin123')
    //cy.get('button[type="submit"]').click()
    //cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')

    loginPage.BukaHalaman()
    loginPage.InputPassword(LoginData.ValidPassword)
    loginPage.ClickButtonLogin()
    loginPage.AssertionLoginEmpty()
  })
  it('TC_LOGIN_006 - Verifikasi Login gagal dengan password kosong', () => {
    //cy.get('[name="username"]').type('Admin')
    //cy.get('button[type="submit"]').click()
    //cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')

    loginPage.BukaHalaman()
    loginPage.InputUsername(LoginData.ValidUsername)
    loginPage.ClickButtonLogin()
    loginPage.AssertionLoginEmpty()
  })
  it('TC_LOGIN_007 - Verifikasi link Forgot Password mengarah ke halaman reset', () => {
    //cy.get('.orangehrm-login-forgot > .oxd-text').click()
    //cy.url().should('include', '/requestPasswordResetCode')
    //cy.get('.orangehrm-forgot-password-title').should('have.text', 'Reset Password')

    loginPage.BukaHalaman()
    loginPage.ClickForgotPassword()
    loginPage.VerifyForgotPassword()
  })
})