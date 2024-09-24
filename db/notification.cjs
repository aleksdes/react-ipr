const { faker } = require('@faker-js/faker');

function createNotification() {
  return {
    id: faker.string.uuid(),
    user: {
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      middleName: faker.person.middleName(),
      avatar: faker.image.avatarGitHub()
    },
    isRead: faker.datatype.boolean(),
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
    eventMessage: faker.lorem.words({ min: 2, max: 5 }),
  };
}

const NOTIFICATION = faker.helpers.multiple(createNotification, {
  count: 30,
});

exports.createNotification = createNotification
exports.NOTIFICATION = NOTIFICATION
