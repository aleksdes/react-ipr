const { faker } = require('@faker-js/faker');

function createUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    middleName: faker.person.middleName(),
    avatar: faker.image.avatarGitHub(),
    nikName: '@CryptoKisel',
    createdAt: faker.date.between({from: '2024-03-14T00:00:00.000Z', to: Date.now()}),
  };
}

const USER = createUser()

const createProfileDetail = () => {
  return {
    ...USER,
    email: 'kurbatov.lex@gmail.com',
    address: faker.location.streetAddress({ useFullAddress: true }),
    placeOfWork: faker.company.name(),
    dateBirth: faker.date.birthdate({ min: 18, max: 35, mode: 'age' }),
    link: 'https://t.me/CryptoKisel',
    intro: faker.person.bio(),
    completeProfile: 0.8,
    postCount: faker.number.int({ min: 50, max: 500 }),
    friendsCount: faker.number.int({ min: 150, max: 1500 }),
    photosCount: faker.number.int({ min: 50, max: 200 }),
    likesCount: 0,
  }
}

const PROFILE_DETAIL = createProfileDetail()


exports.createUser = createUser
exports.createProfileDetail = createProfileDetail
exports.USER = USER
exports.PROFILE_DETAIL = PROFILE_DETAIL