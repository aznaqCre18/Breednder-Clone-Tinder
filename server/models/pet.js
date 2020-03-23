'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    'pet', {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      ages: DataTypes.STRING,
      about_pet: DataTypes.STRING,
      id_species: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      //id_ages: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER
    }, {});
  pet.associate = function (models) {
    //associations can be defined here

    pet.belongsTo(models.species, {
      foreignKey: "id_species",
      //as: "species"
    });

    pet.belongsTo(models.users, {
      foreignKey: "id_user",
      //as: "user"
    });

    // pet.belongsTo(models.ages, {
    //   foreignKey: "id_ages",
    //   as: "age"
    // });

    // pet.belongsTo(models.match, {
    //   foreignKey: "pet_id_match"
    // })
  };
  return pet;
};