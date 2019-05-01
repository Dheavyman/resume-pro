'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Job_Histories', {
      employee_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Departments',
          key: 'department_id',
        },
      },
      title_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Titles',
          key: 'title_id',
        },
      },
      pay: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
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
    return queryInterface.dropTable('Job_Histories');
  }
};