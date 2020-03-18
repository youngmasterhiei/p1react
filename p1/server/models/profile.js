const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define("profile", {
    name: {
      type: DataTypes.STRING
    },
    work: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
      deletedAt: DataTypes.DATE
    },
)
// profile.belongsTo(db.User);
// profile.belongsTo(db.user , {foreignKey: 'ID', as: 'profile'});



return profile
}