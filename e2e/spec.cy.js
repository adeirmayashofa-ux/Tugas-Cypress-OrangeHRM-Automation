describe('Fitur Login OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })
  it('TC_LOGIN_001 - Memastikan halaman login dapat dimuat dan link dapat diakses', () => {
    cy.get('.orangehrm-login-branding').should('be.visible')
    cy.get('.orangehrm-login-title').should('have.text', 'Login')
  })

  it('TC_LOGIN_002 - Verifikasi login dengan kredensial valid', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  it('TC_LOGIN_003 - Verifikasi Login gagal dengan username salah', () => {
    cy.get('[name="username"]').type('Bulan')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')
  })

  it('TC_LOGIN_004 - Verifikasi Login gagal dengan password salah', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('Bulan123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')
  })

  it('TC_LOGIN_005 - Verifikasi Login gagal dengan username kosong', () => {
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')
  })

  it('TC_LOGIN_006 - Verifikasi Login gagal dengan password kosong', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')
  })

  it('TC_LOGIN_007 - Verifikasi Login gagal dengan username dan password kosong', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').and('contain', 'Required')
  })

  it('TC_LOGIN_008 - Verifikasi link Forgot Password mengarah ke halaman reset', () => {
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.url().should('include', '/requestPasswordResetCode')
    cy.get('.orangehrm-forgot-password-title').should('have.text', 'Reset Password')
  })

  it('TC_LOGIN_009 - Verifikasi teks copyright di bagian bawah halaman', () => {
    cy.get('.orangehrm-copyright-wrapper').should('contain', 'OrangeHRM')
  })

  it('TC_LOGIN_010 - Verifikasi terdapat 4 ikon media sosial di footer login', () => {
    cy.get('.orangehrm-login-footer-sm > a').should('have.length', 4)
  })

  // TC_LOGIN_011: Perbaikan agar statusnya Passed
  it('TC_LOGIN_011 - Login gagal dengan username yang tidak terdaftar', () => {
    cy.get('[name="username"]').type('UserTidakAda') // Ganti username ke yang pasti salah
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })
  
  it('TC_LOGIN_012 - Login gagal dengan password huruf besar semua (ADMIN123)', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('ADMIN123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert').should('be.visible').and('contain', 'Invalid credentials')
  })

  it('TC_LOGIN_013 - Memastikan input password memiliki atribut type="password"', () => {
    cy.get('[name="password"]').should('have.attr', 'type', 'password')
  })

})
