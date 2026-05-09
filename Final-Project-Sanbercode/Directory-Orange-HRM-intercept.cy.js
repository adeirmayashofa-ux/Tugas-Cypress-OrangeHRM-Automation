
describe('Fitur Directory orangeHRM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/dashboard')
        
    })
    it('TC-01 Menu Directory dapat di muat', () => {
        cy.intercept('GET', '**/directory/viewDirectory*').as('lihatdata')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.get('.oxd-main-menu-item').contains('Directory').click()
        cy.wait('@lihatdata').its('response.statusCode').should('eq', 200)
        cy.get('.oxd-text--h5').should('contain', 'Directory')

    })  
    it('TC-02 memastikan data karyawan muncul', () => {
        cy.intercept('GET', '**/directory/employees*').as('AmbilData')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.wait('@AmbilData').its('response.statusCode').should('eq', 200)
        cy.get('.oxd-sheet').should('have.length.at.least', 1)

    })
    it('TC-03 Mencari nama karyawan yang tidak terdaftar', () => {
        cy.intercept('GET', '**/directory/viewDirectory*').as('searchEmployee')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
        
        cy.get('input[placeholder="Type for hints..."]').should('be.visible').type('adeirma')
        cy.get('button[type="submit"]').click()
        cy.wait('@searchEmployee')
        cy.contains('No Records Found').should('be.visible')
        cy.get('.oxd-sheet').should('not.exist')

    })
    it('TC-04 Mencari nama karyawan terdaftar', () => {
        cy.intercept('GET', '**/directory/viewDirectory*').as('searchEmployee')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.get('.oxd-autocomplete-text-input > input').type('Ranga')
        cy.get('.oxd-autocomplete-dropdown').should('be.visible').contains('Ranga').click()
        cy.get('button[type="submit"]').click()
        cy.wait('@searchEmployee')
        cy.get('img').should('be.visible')
        cy.get('p').should('not.be.empty')

    })
    it('TC-05 Mereset pencarian karyawan', () => {
        cy.intercept('GET', '**/directory/viewDirectory').as('resetsearch')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.wait('@resetsearch')
        cy.get('.oxd-autocomplete-text-input > input').should('have.value', '')

    })
    it('TC-06 Memastikan dropdown job tittle berfungsi', () => {
        cy.intercept('GET', '**/api/v2/directory/**').as('jobtittle')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.wait('@jobtittle')
        cy.get('.bi-caret-down-fill').eq(1).click()
        cy.get('.oxd-select-dropdown').should('be.visible')

    })
    it('TC-07 Memastikan dropdown location berfungsi', () => {
        cy.intercept('GET', '**/api/v2/directory/**').as('location')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.wait('@location')
        cy.get('.bi-caret-down-fill').eq(2).click()
        cy.get('.oxd-select-dropdown').should('be.visible')
  
    })
    it('TC-08 Memastikan tombol toggle berfungsi', () => {
        cy.intercept('GET', '**/api/v2/directory/**').as('loadSearchbar')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.wait('@loadSearchbar')
        cy.get('.oxd-icon.bi-caret-up-fill').click()
        cy.get('.oxd-table-filter-area').should('not.be.visible')

    })
    it('TC-09 Memastikan biodata muncul saat kartu profil diklik', () => {
        cy.intercept('GET', '**/api/v2/directory/employees/*').as('biodata')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.get('.oxd-sheet').first().click()
        cy.wait('@biodata')
        cy.get('.orangehrm-corporate-directory-sidebar').should('be.visible')
         .within(() => {
         cy.get('.oxd-sheet--rounded').should('be.visible');
        })

    })
    it('TC-10 Memastikan dropdown profil berfungsi', () => {
        cy.intercept('GET', '**/api/v2/directory/employees/*').as('dropdownuser')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

        cy.get('.oxd-icon.bi-caret-down-fill').eq(0).click()
        cy.get('.oxd-dropdown-menu').should('be.visible')

    })
    it('TC-11 Menu about dapat di muat', () => {
        cy.intercept('GET', '**/api/v2/core/about').as('about')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('About').click()
        cy.wait('@about')
        cy.get('.oxd-dialog-container-default').should('be.visible')
        
    })
    it('TC-12 Menu support dapat di muat', () => {
        cy.intercept('GET', '**/web/index.php/help/support').as('support')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Support').click()
        cy.wait('@support').then((interception) => {
            expect([200, 304]).to.include(interception.response.statusCode)
        })
    })
   
})



