const { NOTIFICATION, createNotification } = require('./notification.cjs')
const { createUser, USER, PROFILE_DETAIL } = require('./user.cjs')
const { createPhoto } = require('./photos.cjs')
const { createPost } = require('./posts.cjs')

const PHOTOS = Array.from({ length: PROFILE_DETAIL.photosCount }).map(_ => createPhoto())
const POSTS = Array.from({ length: PROFILE_DETAIL.postCount }).map(_ => createPost())

exports.createNotification = createNotification
exports.createUser = createUser
exports.createPhoto = createPhoto
exports.createPost = createPost

exports.NOTIFICATION = NOTIFICATION
exports.USER = USER
exports.PROFILE_DETAIL = PROFILE_DETAIL
exports.PHOTOS = PHOTOS
exports.POSTS = POSTS