const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:admin1@localhost:3210/balances', {
  //use_env_variable: process.env.DATABASE_URL,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: false,

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

db.operations = require("./operation.model")(sequelize, Sequelize);


module.exports = db;
