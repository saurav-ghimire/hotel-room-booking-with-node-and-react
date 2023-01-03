const express = require('express');
const router = express();

const authRoute = require('./../component/auth/auth.route');
const userRoute = require('./../component/user/user.route');
const roomsRoute = require('./../component/rooms/rooms.route');
const roomsType = require('./../component/roomType/roomtype.route');
const additionalService = require('./../component/additionalService/additionalService.route');

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/rooms', roomsRoute);
router.use('/roomtype', roomsType);
router.use('/additionalservice', additionalService);
// router.use('/dashboard', authentication, authorization, dashboardRoute);

module.exports = router;