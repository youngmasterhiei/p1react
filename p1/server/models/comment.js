const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    thread: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    prevMessage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
      },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    }
)
// comment.belongsTo(db.user);
// comment.belongsTo(db.post);


return comment
}