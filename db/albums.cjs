const { faker } = require('@faker-js/faker');

function createAlbums() {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.word({ length: { min: 5, max: 10 }}),
    photos: [],
    createdAt: faker.date.between({from: '2024-03-01T00:00:00.000Z', to: Date.now()}),
  };
}

const ALBUMS = faker.helpers.multiple(createAlbums, {
  count: 3,
});

exports.createAlbums = createAlbums
exports.ALBUMS = ALBUMS