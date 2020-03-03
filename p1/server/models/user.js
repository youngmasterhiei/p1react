module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: 
        {
            type: Sequelize.DATE,
            allowNull: true
        },
        updatedAt:
        { 
            type: Sequelize.DATE,
            allowNull: true}
    });
    console.log("hello from model user")
    return User;
  };