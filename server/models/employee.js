'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your last name',
        },
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your first name',
        },
      },
    },
    middle_initial: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 1,
        max: 1
      }
    },
    sex: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your address',
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your city',
        },
      },
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your region',
        },
      },
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your postal code',
        },
      },
    },
    home_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    office_phone: DataTypes.STRING,
    office_location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide your address',
        },
      },
    },
    vacation_hours: DataTypes.INTEGER,
    sick_leave_hours: DataTypes.INTEGER
  }, {});
  Employee.associate = (models) => {
    // associations can be defined here
    Employee.hasOne(models.Employee, { as: 'Manager', foreignKey: 'manager_id'})
  };
  return Employee;
};