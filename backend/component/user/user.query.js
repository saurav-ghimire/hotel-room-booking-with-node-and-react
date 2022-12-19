const userModel = require('./user.model');
const userMapping = require('./../../helper/userMapping');

const mongodb = require('mongodb');
let getAllUser = function (req, res, next) {
    return new Promise(function (resolve, reject) {
        userModel.find().exec(function (err, users) {
            if (err) {
                reject(err)
            }
            resolve(users)
        })
    })

}
let getUserWithId = function (id) {
    return new Promise(function (resolve, reject) {
        userModel.findOne({ _id: mongodb.ObjectId(id) }, function (err, done) {
            if (err) {
                reject(err);
            }
            if (!done) {
                resolve({ msg: 'Collection Empty' })
            } else {
                resolve(done)
            }

        });
    })
}
let updateUserWithId = function (id, body) {
    return new Promise(function (resolve, reject) {

        userModel.findById(id, function (err, user) {
            if (err) {
                reject(err)
            }
            if (!user) {
                resolve({ msg: 'User not found' })
            }

            if (user) {
                const updatedMappedUser = userMapping(user, body)

                updatedMappedUser.save(function (err, updatedUser) {
                    if (err) {
                        return reject(err)
                    }
                    resolve(updatedUser)
                })
            }
        });
    })

}
let deleteUserWithId = function (id) {
    return new Promise(function (resolve, reject) {
        userModel.remove({ _id: mongodb.ObjectId(id) }, function (err, done) {
            if (err) {
                reject(err)
            }
            resolve(done)
        });
    })

}
module.exports = { getAllUser, getUserWithId, updateUserWithId, deleteUserWithId }