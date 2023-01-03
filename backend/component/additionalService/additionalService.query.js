const mongodb = require('mongodb');
const additionalServiceModel = require('./addService.model')
const additionalServiceMapping = require('./../../helper/additionalServiceMapping');

function getAllAdditionalServiceQuery() {
    return new Promise(function (resolve, reject) {
        additionalServiceModel.find({}).exec(function (err, done) {
            if (err) {
                reject(err)
            }
            if (done.length < 1) {
                resolve({ msg: 'Services Not Available' })
            }
            resolve(done)
        })
    })
}

function createAdditionalServicesQuery(body) {
    return new Promise(function (resolve, reject) {
        const additionalServiceStoreModel = new additionalServiceModel({});
        const updatedAdditionalServiceMapping = additionalServiceMapping(additionalServiceStoreModel, body)
        updatedAdditionalServiceMapping.save(function (err, done) {
            if (err) {
                reject(err)
            }
            resolve(done)
        })
    })
}

function getAdditionalServiceWithId(id) {
    return new Promise(function (resolve, reject) {
        additionalServiceModel.findById(id, function (err, done) {
            if (err) {
                reject(err);
            }
            if (!done) {
                resolve({ msg: 'URL Not Valid' })
            } else {
                resolve(done)
            }

        })
    })
}
function updateAdditionalServiceWithId(id, body) {
    return new Promise(function (resolve, reject) {
        additionalServiceModel.findById(id, function (err, user) {
            if (err) {
                reject(err)
            }
            if (!user) {
                resolve({ msg: 'Room not found' })
            }

            if (user) {
                const updatedAdditionalServiceMapping = additionalServiceMapping(user, body)
                updatedAdditionalServiceMapping.save(function (err, updatedUser) {
                    if (err) {
                        return reject(err)
                    }
                    resolve(updatedUser)
                })
            }
        });
    })

}
function deleteAdditionalServiceWithId(id) {
    return new Promise(function (resolve, reject) {
        additionalServiceModel.remove({ _id: mongodb.ObjectId(id) }, function (err, done) {
            if (err) {
                reject(err)
            }
            if (!done) {
                resolve({ msg: 'Collection Empty' })
            } else {
                resolve(done)
            }
        });
    })
}
module.exports = {
    getAllAdditionalServiceQuery,
    createAdditionalServicesQuery,
    getAdditionalServiceWithId,
    updateAdditionalServiceWithId,
    deleteAdditionalServiceWithId
}