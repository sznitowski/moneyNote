module.exports = (sequelize, Sequelize) => {
  const Operation = sequelize.define("operation", {
    id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.SERIAL,
      primaryKey: true
    },
    concept: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  });

  return Operation;
};