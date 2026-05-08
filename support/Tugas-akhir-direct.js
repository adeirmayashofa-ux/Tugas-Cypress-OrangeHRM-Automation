class DirectoryPage {
    BukaHalaman(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    BukaHalamanDirectory(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
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
    MenuDirectory(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
    }
    AssertionDirectoryMenu(){
        cy.url().should('include', '/directory/viewDirectory')
        cy.get('.oxd-text--h5').should('contain', 'Directory')
    }
    DataKaryawan(){
        cy.get('.oxd-sheet').should('have.length.at.least', 1)
    }
    SearchInput(data){
        cy.get('input[placeholder="Type for hints..."]').type(data)
    }
    ClickButtonSearch(){
        cy.get('button[type="submit"]').click()
    }
    VerifyInvalidSearch(){
        cy.contains('No Records Found').should('be.visible')
    }
    VerifyValidSearch(){
        cy.get('.oxd-sheet').should('exist')
    }
    ClickButtonReset(){
        cy.contains('button', 'Reset').click()
    }
    AssertionResetSearch(){
        cy.get('.oxd-autocomplete-text-input > input').should('have.value', '')
    }
    ClickIkonDropdown(){
        cy.get('.oxd-select-text').eq(0).click()

    }
}
    export default new DirectoryPage();

