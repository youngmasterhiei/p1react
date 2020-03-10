const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    },
    {
        underscored: true,
        hooks: 
        {
            beforeCreate: (user) => 
            {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    })
 
    user.prototype.validatePass = function (userPass, enteredPass, callback) 
    {
        console.log(userPass + "<db password   usermodel   user entered pass>" + enteredPass);

        return bcrypt.compare(userPass, enteredPass, callback);
    };

return user
}