const db = require("../models");
const bcrypt = require("bcryptjs")

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

    user.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };

     user.beforeCreate(user => {
   user.password = bcrypt.hashSync(
     user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
    return user;
  };



