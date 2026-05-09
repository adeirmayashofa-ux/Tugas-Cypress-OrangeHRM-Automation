import DirectData from "../fixtures/direct-data.json"
import DirectoryPage from "../support/Tugas-akhir-direct.js"

describe('Fitur Directory orangeHRM', () => {
  beforeEach(() => {
    DirectoryPage.BukaHalaman()
    DirectoryPage.InputUsername(DirectData.ValidUsername)
    DirectoryPage.InputPassword(DirectData.ValidPassword)
    DirectoryPage.ClickButtonLogin()
    DirectoryPage.AssertionLoginSukses()
  })

  it('TC-01 Menu Directory dapat di muat', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.AssertionDirectoryMenu()  

  })

  it('TC-02 memastikan data karyawan muncul', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.DataKaryawan()

  })

  it('TC-03 Mencari nama karyawan yang tidak terdaftar', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.SearchInput(DirectData.invalidEmployee)
    DirectoryPage.ClickButtonSearch()
    DirectoryPage.VerifyInvalidSearch()

  })

  it('TC-04 Mencari nama karyawan terdaftar', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.SearchInput(DirectData.ValidEmployee)
    DirectoryPage.ClickButtonSearch()
    DirectoryPage.VerifyValidSearch() 

  })

  it('TC-05 Mereset pencarian karyawan', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.VerifyValidSearch()
    DirectoryPage.ClickButtonReset()
    DirectoryPage.AssertionResetSearch()

  })

  it('TC_06 - Memastikan dropdown Job Title dapat dibuka', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickJobDropdown()
    DirectoryPage.DropdownAsExpected()

  })

  it('TC-07 Memastikan dropdown location berfungsi', () => {
    
    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickLocationDropdown()
    DirectoryPage.DropdownAsExpected()

  })

  it('TC_08 - Memastikan biodata muncul saat kartu profil diklik', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickKartuNama()
    DirectoryPage.ClickKartuNama()

  })

  it('TC-09 Memastikan dropdown profil berfungsi', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickDropdownProfile()
    DirectoryPage.DropdownMenu()

  })

  it('TC-10 Menu about dapat di muat', () => {

    DirectoryPage.MenuDirectory()
    DirectoryPage.ClickDropdownProfile()
    DirectoryPage.ClickAbout()
    DirectoryPage.AssertionAbout()

  })

})

    
