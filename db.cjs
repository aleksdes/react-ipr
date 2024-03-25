// module.exports = () => {
//   const data = { users: [] };
//   // Create 1000 users
//   for (let i = 0; i < 100; i++) {
//     data.users.push({ id: i, name: `user${i}` });
//   }
//   return data;
// };
const { NOTIFICATION } = require('./db/index.cjs');

module.exports = ()  => {
  const data = { notifications: NOTIFICATION };
  // Create 1000 users
  return data;
};