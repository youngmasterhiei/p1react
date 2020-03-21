const db = require(".");

module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define("event", {
    title: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },

  });

  // event.belongsTo(db.user);
  // event.hasMany(db.post);


  return event;
};
