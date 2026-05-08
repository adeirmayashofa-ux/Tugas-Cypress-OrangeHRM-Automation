import DirectData from "../fixtures/direct-data.json"
import DirectoryPage from "../support/Tugas-akhir-direct.js"

describe('Fitur Directory orangeHRM', () => {
  beforeEach(() => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.get('[name="username"]').type('Admin')
    //cy.get('[name="password"]').type('admin123')
    //cy.get('button[type="submit"]').click()
    //cy.url().should('include', '/dashboard')

    DirectoryPage.BukaHalaman()
    DirectoryPage.InputUsername(DirectData.ValidUsername)
    DirectoryPage.InputPassword(DirectData.ValidPassword)
    DirectoryPage.ClickButtonLogin()
    DirectoryPage.AssertionLoginSukses()
  })

  it('TC-01 Menu Directory dapat di muat', () => {
    //cy.contains('.oxd-main-menu-item', 'Directory').click()
    //cy.url().should('include', '/directory/viewDirectory')
    //cy.get('.oxd-text--h5').should('contain', 'Directory')

    DirectoryPage.MenuDirectory()
    DirectoryPage.AssertionDirectoryMenu()  
  })

  it('TC-02 memastikan data karyawan muncul', () => {
    //cy.get('.oxd-sheet').should('have.length.at.least', 1)

    DirectoryPage.MenuDirectory()
    DirectoryPage.DataKaryawan()
  })

  it('TC-03 Mencari nama karyawan yang tidak terdaftar', () => {
   //cy.get('input[placeholder="Type for hints..."]').type('adeirma')
   //cy.get('button[type="submit"]').click()
   //cy.contains('No Records Found').should('be.visible')

    DirectoryPage.MenuDirectory()
    DirectoryPage.SearchInput(DirectData.invalidEmployee)
    DirectoryPage.ClickButtonSearch()
    DirectoryPage.VerifyInvalidSearch()
  })

  it('TC-04 Mencari nama karyawan terdaftar', () => {
    //cy.get('input[placeholder="Type for hints..."]').type('Ranga')
    //cy.get('button[type="submit"]').click()
    //cy.get('.oxd-sheet').should('exist')
    //cy.contains('Ranga').should('be.visible')
  
    DirectoryPage.MenuDirectory()
    DirectoryPage.SearchInput(DirectData.ValidEmployee)
    DirectoryPage.ClickButtonSearch()
    DirectoryPage.VerifyValidSearch() 
  })

  it.only('TC-05 Mereset pencarian karyawan', () => {
    //cy.get('.oxd-autocomplete-text-input > input').type('Ranga')
    //cy.contains('button', 'Reset').click()
    //cy.get('.oxd-autocomplete-text-input > input').should('have.value', '')

    DirectoryPage.MenuDirectory()
    DirectoryPage.VerifyValidSearch()
    DirectoryPage.ClickButtonReset()
    DirectoryPage.AssertionResetSearch()
  })
  
  it('TC-07 Memastikan dropdown location berfungsi', () => {
    //cy.get('.oxd-select-text').eq(0).click()
    //cy.get('.oxd-select-dropdown').should('be.visible')

    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickIkonDropdown()
    




})