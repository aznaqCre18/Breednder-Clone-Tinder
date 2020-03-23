'use strict';
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    id_pet: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    id_like: DataTypes.INTEGER
  }, {});
  match.associate = function (models) {
    // associations can be defined here
    match.belongsTo(models.pet, {
      foreignKey: "id_pet",
      as: "pet"
    });

    match.belongsTo(models.pet, {
      foreignKey: "id_like",
      as: "pet_liked"
    });
  };
  return match;
};
