const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const eventAttendance = sequelize.define("eventAttendance", {
    eventTitle: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    }
  });

  return eventAttendance;
};

// BelongsTo association since BelongsTo will add the foreignKey
