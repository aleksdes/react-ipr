const { NOTIFICATION, createNotification } = require('./notification.cjs')
const { createUser, USER, PROFILE_DETAIL } = require('./user.cjs')
const { createPhoto } = require('./photos.cjs')
const { createPost } = require('./posts.cjs')

const PHOTOS = Array.from({ length: PROFILE_DETAIL.photosCount }).map(_ => createPhoto())
let countPostsLikes = 0
const POSTS = Array.from({ length: PROFILE_DETAIL.postCount }).map(_ => {
  const post = createPost()
  countPostsLikes = countPostsLikes + (post.likes || 0)
  return post
})

PROFILE_DETAIL.likesCount = countPostsLikes

exports.createNotification = createNotification
exports.createUser = createUser
exports.createPhoto = createPhoto
exports.createPost = createPost

exports.NOTIFICATION = NOTIFICATION
exports.USER = USER
exports.PROFILE_DETAIL = PROFILE_DETAIL
exports.PHOTOS = PHOTOS
exports.POSTS = POSTS