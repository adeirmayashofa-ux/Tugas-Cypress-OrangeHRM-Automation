describe('Fitur Directory OrangeHRM', () => {

  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')

  })

  it('TC_DIRECTORY_001 - Memastikan menu Directory dapat dimuat', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.contains('.oxd-main-menu-item', 'Directory').click()

    cy.url().should('include', '/directory/viewDirectory')

    cy.get('.oxd-text--h5')
      .should('contain', 'Directory')

  })

  it('TC_DIRECTORY_002 - Memastikan data karyawan muncul', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-sheet')
      .should('have.length.at.least', 1)

  })

  it('TC_DIRECTORY_003 - Memastikan pencarian karyawan yang tidak terdaftar menampilkan No Records Found', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('input[placeholder="Type for hints..."]')
      .type('adeirma')

    cy.get('button[type="submit"]').click()

    cy.contains('No Records Found')
      .should('be.visible')

  })

  it('TC_DIRECTORY_004 - Memastikan pencarian nama karyawan terdaftar berhasil', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-autocomplete-text-input > input')
      .type('Ranga')

    cy.get('.oxd-autocomplete-dropdown')
      .should('be.visible')
      .contains('Ranga')
      .click()

    cy.get('button[type="submit"]').click()

    cy.get('.oxd-sheet')
      .should('exist')

    cy.contains('Ranga')
      .should('be.visible')

  })

  it('TC_DIRECTORY_005 - Memastikan tombol reset pencarian berfungsi', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-autocomplete-text-input > input')
      .type('Ranga')

    cy.contains('button', 'Reset').click()

    cy.get('.oxd-autocomplete-text-input > input')
      .should('have.value', '')

  })

  it('TC_DIRECTORY_006 - Memastikan dropdown Job Title dapat dibuka', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-select-text')
      .eq(0)
      .click()

    cy.get('.oxd-select-dropdown')
      .should('be.visible')

  })

  it('TC_DIRECTORY_007 - Memastikan dropdown Location dapat dibuka', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-select-text')
      .eq(1)
      .click()

    cy.get('.oxd-select-dropdown')
      .should('be.visible')

  })

  it('TC_DIRECTORY_008 - Memastikan tombol toggle search bar berfungsi', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.orangehrm-directory-search button')
      .first()
      .click()

    cy.get('.oxd-table-filter-area')
      .should('not.be.visible')

  })

  it('TC_DIRECTORY_009 - Memastikan biodata muncul saat kartu profil diklik', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-sheet')
      .first()
      .click()

    cy.get('.orangehrm-corporate-directory-sidebar')
      .should('be.visible')

    cy.get('.oxd-sheet--rounded')
      .should('be.visible')

  })

  it('TC_DIRECTORY_010 - Memastikan dropdown user dapat dibuka', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    cy.get('.oxd-userdropdown-tab')
      .click()

    cy.get('.oxd-dropdown-menu')
      .should('be.visible')

  })

  it('TC_DIRECTORY_011 - Memastikan menu About dapat dimuat', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.get('.oxd-userdropdown-tab')
      .click()

    cy.contains('About')
      .click()

    cy.get('.oxd-dialog-container-default')
      .should('be.visible')

  })

  it('TC_DIRECTORY_012 - Memastikan menu Support dapat dimuat', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.get('.oxd-userdropdown-tab')
      .click()

    cy.contains('Support')
      .click()

    cy.url()
      .should('include', '/help/support')

  })

  it('TC_DIRECTORY_013 - Memastikan menu Change Password dapat dimuat', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.get('.oxd-userdropdown-tab')
      .click()

    cy.contains('Change Password')
      .click()

    cy.url()
      .should('include', 'updatePassword')

    cy.get('.oxd-text--h6')
      .should('contain', 'Update Password')

  })

})