const { faker } = require('@faker-js/faker');

function createPhoto() {
  return {
    id: faker.string.uuid(),
    url: faker.image.urlLoremFlickr({ category: ['nature', 'paris'] }),
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
  };
}

exports.createPhoto = createPhoto
