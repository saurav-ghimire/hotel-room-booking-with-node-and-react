
const authQuery = require('./auth.query')
let loginPage = function (req, res, next) {
    console.log('i am login route')
    res.render('login.ejs', { title: "Login Page" })
}
let loginProcess = function (req, res, next) {
    authQuery.loginProcess(req.body, res)
}
let registerPage = function (req, res, next) {
    console.log('i am register route')
    res.render('register.ejs', { title: "Register Here" })
}
let registerProcess = function (req, res, next) {

    authQuery.registerProcess(req.body, res, next)
}
let forgetPasswordPage = function (req, res, next) {
    console.log('i am forget password route')
    res.json({ msg: 'forget password Route' })
}
let resetProcess = function (req, res, next) {
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