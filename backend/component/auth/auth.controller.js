
const authQuery = require('./auth.query')
let loginPage = (req, res, next) => {
    console.log('i am login route')
    res.render('login.ejs', { title: "Login Page" })
}
let loginProcess = (req, res, next) => {
    authQuery.loginProcess(req.body, res)
}
let registerPage = (req, res, next) => {
    console.log('i am register route')
    res.render('register.ejs', { title: "Register Here" })
}
let registerProcess = (req, res, next) => {

    authQuery.registerProcess(req.body, res, next)
}
let forgetPasswordPage = (req, res, next) => {
    console.log('i am forget password route')
    res.json({ msg: 'forget password Route' })
}
let resetProcess = (req, res, next) => {
    console.log('i am Post forget password route')
    res.json({ msg: 'forget password Route' })
}
module.exports = {
    loginPage,
    loginProcess,
    registerPage,
    registerProcess,
    forgetPasswordPage,
    resetProcess
}