const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define("profile", {
    fName: {
      type: DataTypes.STRING,
    },
    lName: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    st: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
    },
    speciality: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    linkedIn: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: DataTypes.DATE,
  });
  // profile.belongsTo(db.User);
  // profile.belongsTo(db.user , {foreignKey: 'ID', as: 'profile'});

  return profile;
};
