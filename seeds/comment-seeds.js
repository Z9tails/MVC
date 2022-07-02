const { Comment } = require('../models');

const commentdata = [
  // {
  //   comment_text: 'listen you know you want to read this comment'
  // },
 
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
