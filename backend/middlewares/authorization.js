const userModel = require("../component/user/user.model")

module.exports = function (req, res, next) {
    userModel.findById(req.loggedInUser, function (err, user) {
        if (err) {
            return next(err)
        }
        if (user.role === 'super-admin' || 'admin' || 'manager') {
            // if (user.role === 'route-handle') {
            next();
        } else {
            next({
                msg: 'Permission Denied'
            })
        }
    })
}