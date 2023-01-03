const roomModel = require('./rooms.model');
const roomMaping = require('./../../helper/roomMapping');
const mongodb = require('mongodb');

function createRoomQuery(body) {
    return new Promise(function (resolve, reject) {
        const roomStoreModel = new roomModel({});
        console.log('body', body)
        const udpatedroomMaping = roomMaping(roomStoreModel, body)

        udpatedroomMaping.save(function (err, done) {
            if (err) {

                reject(err)
            }
            console.log('done', done)
            resolve(done)
        })

    })
}
function getAllRoomQuery() {
    return new Promise(function (resolve, reject) {
        roomModel.find({}).populate('createdBy').exec(function (err, done) {
            if (err) {
                console.log(err)
                reject(err)
            }
            if (done.length < 1) {
                resolve({ msg: 'Rooms Not Available' })
            }

            resolve(done)
        })

    })
}

let getRoomWithId = function (id) {
    return new Promise(function (resolve, reject) {
        roomModel.findById(id, function (err, done) {
            if (err) {
                reject(err);
            }
            if (!done) {
                resolve({ msg: 'URL Not Valid' })
            } else {
                resolve(done)
            }

        }).populate('createdBy')
    })
}
let updateRoomWithId = function (id, body) {
    return new Promise(function (resolve, reject) {

        roomModel.findById(id, function (err, user) {
            if (err) {
                reject(err)
            }
            if (!user) {
                resolve({ msg: 'Room not found' })
            }

            if (user) {
                const updatedMappedRoom = roomMaping(user, body)

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
let deleteRoomWithId = function (id) {
    return new Promise(function (resolve, reject) {
        roomModel.remove({ _id: mongodb.ObjectId(id) }, function (err, done) {
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
let getLoggedInUserRooms = function (req) {
    return new Promise(function (resolve, reject) {
        roomModel.find({ createdBy: req.loggedInUser }, function (err, done) {
            if (err) {
                reject(err);
            }
            if (!done) {
                resolve({ msg: 'URL Not Valid' })
            } else {
                resolve(done)
            }

        }).populate('createdBy')
    })
}
module.exports = {
    createRoomQuery,
    getAllRoomQuery,
    getRoomWithId,
    deleteRoomWithId,
    updateRoomWithId,
    getLoggedInUserRooms
}