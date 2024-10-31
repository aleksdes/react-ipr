const { faker } = require('@faker-js/faker');

function createGroup() {
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    imagePreview: faker.image.urlLoremFlickr({ category: ['nature', 'paris']}),
    avatar: faker.image.urlLoremFlickr({ category: ['nature', 'paris']}),
    city: faker.location.city(),
    countDayPost: faker.number.int({ min: 0, max: 10 }),
    isJoined: faker.datatype.boolean({probability: 0.3}),
    isRecommended: faker.datatype.boolean({probability: 0.2}),
    countUsers: faker.number.int({ min: 1000, max: 10000 }),
    usersPreviews: faker.helpers.multiple(() => faker.image.urlLoremFlickr(), {
      category: ['people', 'nature'],
      count: {
        min: 3,
        max: 3
      },
    }),
    createdAt: faker.date.between({from: '2024-03-01T00:00:00.000Z', to: Date.now()}),
  };
}

const GROUPS = faker.helpers.multiple(createGroup, {
  count: 300,
});

exports.createGroup = createGroup
exports.GROUPS = GROUPS
