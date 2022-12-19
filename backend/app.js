const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const app = express()
const config = require('./config/config')

require('./db')

app.set('view engine', ejs)
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))

// load routing level middlewares
const apiRoute = require('./routes/api.route');

// third-party middleware
app.use(morgan('dev'));
app.use(express.static('public'))
app.use('/api', apiRoute);


app.get('/', (req, res) => {
    res.redirect('/api/auth/login')
})
app.use(function (err, req, res, next) {
    res.json({
        err: err.message || err
    })
})
app.use(function (req, res, next) {
    console.log('Page not found');
    res.json({ msg: 'Page Not Found' })
})

app.listen(config.app.port, () => {
    console.log(`App is running on port ${config.app.port}`)
})