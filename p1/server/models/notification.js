const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const notification = sequelize.define("notification", {
    messageType: {
      type: DataTypes.STRING
    },
    fromUserId: {
      type: DataTypes.STRING
    },
    receivingUserId: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    seen: {
      type: DataTypes.BOOLEAN
    },
    actedUpon: {
      type: DataTypes.BOOLEAN
    }
  });

  return notification;
};

// BelongsTo association since BelongsTo will add the foreignKey
