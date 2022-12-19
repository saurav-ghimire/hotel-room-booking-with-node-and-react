const userModel = require('./../user/user.model');
const userMapping = require('./../../helper/userMapping');
const userValidatorModel = require('./../user/user.model')
const passwordHash = require('password-hash');
const config = require('./../../config/config')
var jwt = require('jsonwebtoken');

function registerProcess(body, res) {
    const newUser = new userValidatorModel({});
    const mappedUser = userMapping(newUser, body)

    mappedUser.save(function (err, userInserted) {
        if (err) {
            return next(err)
        }
        res.status(200).json(userInserted)
    })
}
function loginProcess(body, res) {
    userModel.findOne({ username: body.username }).exec(function (err, users) {
        if (err) {
            return next(err)
        }
        if (users != undefined) {
            let verifyPass = passwordHash.verify(body.password, users.password)
            if (verifyPass) {
                const token = jwt.sign({ id: users._id }, config.app.jwtSecretKey);
                res.status(200).json({ users, token })
            } else {
                res.status(200).json({ msg: 'username/passoword Incorrect.' })
            }
        } else {
            res.status(200).json({ msg: 'username/passoword Incorrect.' })
        }
    })
}

module.exports = {
    registerProcess,
    loginProcess
}