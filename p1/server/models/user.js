var db = require("../models");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: 
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt:
        { 
            type: DataTypes.DATE,
            allowNull: true}
    });
    console.log("hello from model user")
    return user;
  };