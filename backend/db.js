const config = require('./config/config')

const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(config.db.mongoDbUrl, function (err) {
    if (err) {
        console.log('Database not connected')
    } else {
        console.log('Database connected')

    }
})