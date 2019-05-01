'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      employee_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manager_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Employees',
          key: 'employee_id',
          as: 'manager_id',
        },
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_initial: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      home_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      office_phone: {
        type: Sequelize.STRING
      },
      office_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vacation_hours: {
        type: Sequelize.INTEGER
      },
      sick_leave_hours: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Employees');
  }
};