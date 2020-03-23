'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    no_rek: DataTypes.STRING,
    proof_of_transfer: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  payment.associate = function (models) {
    // associations can be defined here
    payment.belongsTo(models.users, {
      foreignKey: "user_id",
      //as: "species"
    });
  };
  return payment;
};