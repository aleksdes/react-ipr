const { faker } = require('@faker-js/faker');

function createNotification() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    id: faker.string.uuid(),
    user: {
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      middleName: faker.person.middleName(),
      avatar: faker.image.avatar()
    },
    isRead: faker.datatype.boolean(),
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
    eventMessage: faker.lorem.words({ min: 2, max: 5 }),
  };
}

const NOTIFICATION = faker.helpers.multiple(createNotification, {
  count: 20,
});

exports.createNotification = createNotification
exports.NOTIFICATION = NOTIFICATION
