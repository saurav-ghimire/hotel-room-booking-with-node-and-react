const mongodb = require('mongodb');
const roomTypeModel = require('./type.model');
const roomTypeMapping = require('./../../helper/roomTypeMapping');

function getAllRoomTypeQuery() {
    return new Promise(function (resolve, reject) {
        roomTypeModel.find({}).exec(function (err, done) {
            if (err) {
                console.log(err)
                reject(err)
            }
            if (done.length < 1) {
                resolve({ msg: 'Room Types Not Available' })
            }

            resolve(done)
        })
    })
}
function createRoomTypeQuery(body) {
    return new Promise(function (resolve, reject) {
        const roomTypeStoreModel = new roomTypeModel({});
        const udpatedroomMaping = roomTypeMapping(roomTypeStoreModel, body)
        udpatedroomMaping.save(function (err, done) {
            if (err) {
                console.log(err)
                reject(err)
            }

            resolve(done)
        })

    })
}
let getRoomTypeWithId = function (id) {
    return new Promise(function (resolve, reject) {
        roomTypeModel.findById(id, function (err, done) {
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
let updateRoomTypeWithId = function (id, body) {
    return new Promise(function (resolve, reject) {
        roomTypeModel.findById(id, function (err, user) {
            if (err) {
                reject(err)
            }
            if (!user) {
                resolve({ msg: 'Room not found' })
            }

            if (user) {
                const updatedMappedRoom = roomTypeMapping(user, body)
                updatedMappedRoom.save(function (err, updatedUser) {
                    if (err) {
                        return reject(err)
                    }
                    resolve(updatedUser)
                })
            }
        });
    })

}
let deleteRoomTypeWithId = function (id) {
    return new Promise(function (resolve, reject) {
        roomTypeModel.remove({ _id: mongodb.ObjectId(id) }, function (err, done) {
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
    getAllRoomTypeQuery,
    createRoomTypeQuery,
    getRoomTypeWithId,
    updateRoomTypeWithId,
    deleteRoomTypeWithId
}