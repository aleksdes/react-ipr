const { ALBUMS, FRIENDS,GROUPS, NOTIFICATION , USER, PHOTOS,POSTS, PROFILE_DETAIL} = require('./db/index.cjs');

module.exports = ()  => {
  const data = {
    notifications: NOTIFICATION,
    user: USER,
    'profile-info': PROFILE_DETAIL,
    photos: PHOTOS,
    posts: POSTS,
    groups: GROUPS,
    friends: FRIENDS,
    albums: ALBUMS
  };

  return data;
};