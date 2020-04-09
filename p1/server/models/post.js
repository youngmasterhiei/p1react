const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const thread = sequelize.define("thread", {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: DataTypes.DATE,
  });

  return thread;
};

// BelongsTo association since BelongsTo will add the foreignKey
