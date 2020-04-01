const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const friendsList = sequelize.define("friendsList", {
    userId: {
      type: DataTypes.STRING
    },
    friendUserId: {
      type: DataTypes.STRING
    }
  });

  return friendsList;
};

// BelongsTo association since BelongsTo will add the foreignKey
