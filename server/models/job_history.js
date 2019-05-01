'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job_History = sequelize.define('Job_History', {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pay: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {});
  Job_History.associate = function(models) {
    // associations can be defined here
    Job_History.belongsTo(models.Employee, { foreignKey: 'employee_id' });
    Job_History.belongsTo(models.Departments, { foreignKey: 'department_id' });
    Job_History.belongsTo(models.Title, { foreignKey: 'title_id' });
  };
  return Job_History;
};