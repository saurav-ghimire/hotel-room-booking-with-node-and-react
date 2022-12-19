var jwt = require('jsonwebtoken');
const userModel = require('../component/user/user.model');
const config = require('./../config/config')

module.exports = function (req, res, next) {
    // Get the token from the request header or query string
    const token = req.headers['x-access-token'] || req.query.token || req.headers['token'] || req.headers['authorization'];

    // If there is no token, return an error
    if (!token) {
        return res.status(401).json({ msg: 'Access denied' });
    } else {
        jwt.verify(token, config.app.jwtSecretKey, function (err, verifiedUser) {
            console.log(verifiedUser)
            if (err) {
                return next(err)
            }
            if (!verifiedUser) {
                return next({ msg: 'Invalid token' });
            }
            userModel.findById(verifiedUser.id, function (err, finalVerifiedUser) {
                if (err) {
                    return next(err)
                }
                console.log(finalVerifiedUser)
                if (!finalVerifiedUser) {
                    return next({
                        msg: 'User Not Found || Access denied'
                    })
                }
                next()
            })
        });
    }
}