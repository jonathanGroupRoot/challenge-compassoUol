'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('client', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'city', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.dropTable('client');

  }
};
