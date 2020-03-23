'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM(['male', 'female'])
      },
      ages: {
        type: Sequelize.ENUM(['child', 'teenager', 'adult'])
        // type: Sequelize.STRING
      },
      about_pet: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      // ages: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "age",
      //     key: "id"
      //   },
      //   onUpdate: "cascade",
      //   onDelete: "cascade"
      // },
      id_species: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "species",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNulll: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
  }
};