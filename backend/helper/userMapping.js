const passwordHash = require('password-hash');

module.exports = function (user, data) {

    if (data.name) {
        user.name = data.name
    }
    if (data.email) {
        user.email = data.email
    }
    if (data.phone) {
        user.phone = data.phone
    }
    if (data.username) {
        user.username = data.username
    }
    if (data.password) {
        user.password = passwordHash.generate(data.password);
    }
    if (data.address) {
        user.address = data.address
    }
    return user
}