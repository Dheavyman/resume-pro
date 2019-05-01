'use strict';
module.exports = (sequelize, DataTypes) => {
  const Title = sequelize.define('Title', {
    title_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_description: DataTypes.STRING,
    low_pay: DataTypes.INTEGER,
    high_pay: DataTypes.INTEGER
  }, {});
  Title.associate = function(models) {
    // associations can be defined here
  };
  return Title;
};