const { Post } = require('../models');

const postdata = [
  // {
  //   title: 'Why would you make us do this?',
  //   post: 'This was amazing.'
  // },
  // {
  //   title: 'This is not ok to play.',
  //   post: 'Best things ever.'
  // },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
