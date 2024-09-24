const { NOTIFICATION , USER, PROFILE_DETAIL} = require('./db/index.cjs');

module.exports = ()  => {
  const data = { notifications: NOTIFICATION, user: USER, 'profile-info': PROFILE_DETAIL };
  // Create 1000 users
  return data;
};