const { NOTIFICATION , USER, PHOTOS,POSTS, PROFILE_DETAIL} = require('./db/index.cjs');

module.exports = ()  => {
  const data = {
    notifications: NOTIFICATION,
    user: USER,
    'profile-info': PROFILE_DETAIL,
    photos: PHOTOS,
    posts: POSTS,
  };
  // Create 1000 users
  return data;
};