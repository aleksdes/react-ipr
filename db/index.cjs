const { NOTIFICATION, createNotification } = require('./notification.cjs')
const { createUser, USER, PROFILE_DETAIL } = require('./user.cjs')
const { createPhoto } = require('./photos.cjs')
const { createPost } = require('./posts.cjs')
const { createGroup, GROUPS } = require('./groups.cjs')
const { createFriend, FRIENDS } = require('./friends.cjs')
const { createAlbums, ALBUMS } = require('./albums.cjs')

let countPostsLikes = 0
const POSTS = Array.from({ length: PROFILE_DETAIL.postCount }).map(_ => {
  const post = createPost()
  countPostsLikes = countPostsLikes + (post.likes || 0)
  return post
})

const lengthAlbums = ALBUMS.length
function getRandomRangeInteger(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}

const PHOTOS = Array.from({ length: PROFILE_DETAIL.photosCount }).map(_ => {
  const photo = createPhoto()
  const indexAlbum = getRandomRangeInteger(0, lengthAlbums)
  const albumId = ALBUMS[indexAlbum].id
  photo.albumId = albumId
  ALBUMS[indexAlbum].photos.push(photo)
  return photo
})

PROFILE_DETAIL.likesCount = countPostsLikes

exports.createNotification = createNotification
exports.createUser = createUser
exports.createPhoto = createPhoto
exports.createPost = createPost
exports.createGroup = createGroup
exports.createFriend = createFriend
exports.createAlbums = createAlbums

exports.NOTIFICATION = NOTIFICATION
exports.USER = USER
exports.PROFILE_DETAIL = PROFILE_DETAIL
exports.PHOTOS = PHOTOS
exports.POSTS = POSTS
exports.GROUPS = GROUPS
exports.FRIENDS = FRIENDS
exports.ALBUMS = ALBUMS