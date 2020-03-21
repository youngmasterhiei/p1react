const db = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    project1: {
      type: DataTypes.STRING
    },
    project2: {
      type: DataTypes.STRING
    },
    project3: {
      type: DataTypes.STRING
    },
    project4: {
      type: DataTypes.STRING
    },
    project5: {
      type: DataTypes.STRING
    }
   
   
    
    
    }
)
// Project.belongsTo(db.User);
// Project.belongsTo(db.user , {foreignKey: 'ID', as: 'Project'});



return Project
}