const { faker } = require('@faker-js/faker');

function createFriend() {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    middleName: faker.person.middleName(),
    avatar: faker.image.urlLoremFlickr({ category: ['people', 'nature']}),
    nikName: `@${faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' })}`,
    isNewMessage: faker.datatype.boolean({probability: 0.3}),
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
  };
}

const FRIENDS = faker.helpers.multiple(createFriend, {
  count: 150,
});

exports.createFriend = createFriend
exports.FRIENDS = FRIENDS