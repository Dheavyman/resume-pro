'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    department_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide department name',
        },
      },
    },
  }, {});
  Departments.associate = (models) => {
    // associations can be defined here
    Departments.belongsTo(models.Employee, { foreignKey: 'employee_id'})
  };
  return Departments;
};