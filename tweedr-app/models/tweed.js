'use strict';
module.exports = (sequelize, DataTypes) => {
  const tweed = sequelize.define('tweed', {
    name: DataTypes.STRING,
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER
  }, {});
  tweed.associate = function(models) {
    // associations can be defined here
  };
  return tweed;
};