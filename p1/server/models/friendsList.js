const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const friendsList = sequelize.define("friendsList", {
    username: {
      type: DataTypes.STRING
    },
    friendUsername: {
      type: DataTypes.STRING
    }
  });

  return friendsList;
};

// BelongsTo association since BelongsTo will add the foreignKey
