const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:admin1@localhost:3210/balances', {
  //use_env_variable: process.env.DATABASE_URL,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: 0,

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
// tables routes
db.operations = require("./operation.model")(sequelize, Sequelize);
db.users = require("./users.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
// users and roles config
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;