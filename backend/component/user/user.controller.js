const mongodb = require('mongodb');
const userModel = require('./user.model');
const userQuery = require('./user.query');

let getAllUser = function (req, res, next) {
    userQuery.getAllUser()
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })

    // userModel.find().exec(function (err, users) {
    //     if (err) {
    //         return next(err)
    //     }
    //     res.status(200).json(users)
    // })
}
let getUserWithId = function (req, res, next) {

    userQuery.getUserWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
    // userModel.findOne({ _id: mongodb.ObjectId(req.params.id) }, function (err, done) {
    //     if (err) {
    //         return next(err);
    //     }
    //     if (!done) {
    //         res.json({ msg: 'Collection Empty' })
    //     } else {
    //         res.json(done)
    //     }

    // });
}

let updateUserWithId = function (req, res, next) {

    userQuery.updateUserWithId(req.params.id, req.body)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
            next(err)
        })
    // userModel.updateOne({ _id: mongodb.ObjectId() }, { $set: req.body }, function (err, done) {
    //     if (err) {
    //         return next(err);
    //     }
    //     if (!done) {
    //         res.json({ msg: 'Collection Empty' })
    //     } else {
    //         res.json(done)
    //     }
    // });
}
let deleteUserWithId = function (req, res, next) {
    userQuery.deleteUserWithId(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
    // userModel.remove({ _id: mongodb.ObjectId(req.params.id) }, function (err, done) {
    //     if (err) {
    //         return next(err);
    //     }
    //     if (!done) {
    //         res.json({ msg: 'Collection Empty' })
    //     } else {
    //         res.json(done)
    //     }
    // });
}
module.exports = {
    getAllUser,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId
}