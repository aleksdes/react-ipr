const { faker } = require('@faker-js/faker');

function createPhoto() {
  return {
    id: faker.string.uuid(),
    url: faker.image.urlLoremFlickr({ category: ['nature', 'people'] }),
    likesCount: faker.number.int({ min: 0, max: 300 }),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
  };
}

exports.createPhoto = createPhoto
