class DirectoryPage {
    BukaHalaman() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    BukaHalamanDirectory() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
    }
    VerifyLoginPageDisplay() {
        cy.get('.orangehrm-login-branding').should('be.visible')
        cy.get('.orangehrm-login-title').should('have.text', 'Login')
    }
    InputUsername(username) {
        cy.get('[name="username"]').type(username)
    }
    InputPassword(password) {
        cy.get('[name="password"]').type(password)
    }
    ClickButtonLogin() {
        cy.get('button[type="submit"]').click()
    }
    AssertionLoginSukses() {
        cy.url().should('include', '/dashboard')
    }
    MenuDirectory() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
    }
    AssertionDirectoryMenu() {
        cy.url().should('include', '/directory/viewDirectory')
        cy.get('.oxd-text--h5').should('contain', 'Directory')
    }
    DataKaryawan() {
        cy.get('.oxd-sheet').should('have.length.at.least', 1)
    }
    SearchInput(data) {
        cy.get('input[placeholder="Type for hints..."]').type(data)
    }
    ClickButtonSearch() {
        cy.get('button[type="submit"]').click()
    }
    VerifyInvalidSearch() {
        cy.contains('No Records Found').should('be.visible')
    }
    VerifyValidSearch() {
        cy.get('.oxd-sheet').should('exist')
    }
    ClickButtonReset() {
        cy.contains('button', 'Reset').click()
    }
    AssertionResetSearch() {
        cy.get('.oxd-autocomplete-text-input > input').should('have.value', '')
    }
    ClickLocationDropdown() {
        cy.get('.oxd-select-text').eq(1).click()
    }
    ClickJobDropdown() {
        cy.get('.oxd-select-text').eq(0).click()
    }
    DropdownAsExpected() {
        cy.get('.oxd-select-dropdown').should('be.visible')
    }
    ClickButtonTogle() {
        cy.get('.oxd-icon bi-caret-up-fill').click()
    }
    MenuSearchDisplay() {
        cy.get('.oxd-table-filter').should('not.be.visible')
    }
    ClickKartuNama() {
        cy.get('.orangehrm-directory-card').first().click({ force: true })
    }
    BiodataKaryawan() {
        cy.get('.oxd-oxd-sheet--white orangehrm-directory-car-item').should('be.visible')
        cy.get('.oxd-orangehrm-directory-card-body"').should('be.visible')
    }
    ClickDropdownProfile(){
        cy.get('.oxd-userdropdown-tab').click()
    }
    DropdownMenu(){
        cy.get('.oxd-dropdown-menu').should('be.visible')
    }
    ClickAbout(){
        cy.contains('About').click()
    }
    AssertionAbout(){
        cy.get('.oxd-dialog-container-default').should('be.visible')

    }




}



export default new DirectoryPage();

