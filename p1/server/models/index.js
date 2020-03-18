const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);
db.event = require("./event.js")(sequelize, Sequelize);
db.post = require("./post.js")(sequelize, Sequelize);
db.profile = require("./profile.js")(sequelize, Sequelize);
db.thread = require("./thread.js")(sequelize, Sequelize);


db.user.hasOne(db.profile);
db.profile.belongsTo(db.user);


// db.user.hasMany(db.event);
// db.event.belongsTo(db.user);

// db.user.hasMany(db.thread);
// db.thread.belongsTo(db.user);

// db.user.hasMany(db.comment);
// db.comment.belongsTo(db.user);


// db.comment.belongsTo(db.user);
// db.comment.belongsTo(db.post);



module.exports = db;