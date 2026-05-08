import LoginData from "../fixtures/Tugas-akhir-resetdata.json"
import loginPage from "../support/Tugas-akhir-resetpass.js"

describe('Fitur Login OrangeHRM', () => { 

    it('Verifikasi link Forgot Password mengarah ke halaman reset', () => {
        loginPage.BukaHalaman()
        loginPage.ClickForgotPassword()
        loginPage.VerifyForgotPassword()
    })
    it('Berhasil reset password dengan username valid', () => {
        loginPage.BukaHalaman()
        loginPage.ClickForgotPassword()
        loginPage.InputUsername(LoginData.UsernameResetPassword)
        loginPage.ClickButtonResetPassword()
    })
    it('Tidak jadi reset password', () => {
        loginPage.BukaHalaman()
        loginPage.ClickForgotPassword()
        loginPage.ClickButtonCancle()
    })

})
