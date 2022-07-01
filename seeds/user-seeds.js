const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Jili1',
    password: 'password123'
  },
  {
    username: 'Kenny2',
    password: 'password123'
  },
  {
    username: 'Mark3',
    password: 'password123'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
