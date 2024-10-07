const { faker } = require('@faker-js/faker');

function createPost() {
  return {
    id: faker.string.uuid(),
    message: faker.lorem.lines({ min: 2, max: 5 }),
    likes: faker.number.int({ min: 50, max: 3000 }),
    comments: 0,
    share: faker.number.int({ min: 50, max: 400 }),
    images: faker.helpers.multiple(() => faker.image.urlLoremFlickr({ category: ['nature', 'paris'] }), {
      count: {
        min: 0,
        max: 4
      },
    }),
    isLicked: faker.datatype.boolean(),
    createdAt: faker.date.between({from: '2024-03-01T00:00:00.000Z', to: Date.now()}),
  };
}

exports.createPost = createPost