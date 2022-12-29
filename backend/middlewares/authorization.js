function adminChecker(req, res, next) {
    if (req.loggedInUserRole === 'super-admin' || req.loggedInUserRole === 'admin') {
        return next();
    } else {
        return next({
            msg: 'Permission Denied'
        })
    }
}
function editorChecker(req, res, next) {
    console.log(req.loggedInUserRole)
    if (req.loggedInUserRole === 'manager' || req.loggedInUserRole === 'editor') {
        return next();
    } else {
        return next({
            msg: 'Permission Denied'
        })
    }
}
module.exports = { adminChecker, editorChecker }