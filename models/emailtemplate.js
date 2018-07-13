'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmailTemplate = sequelize.define('EmailTemplate', {
    alias: DataTypes.STRING,
    titulo: DataTypes.STRING,
    corpo: DataTypes.STRING
  }, {
    tableName: 'EmailTemplate'
  });
  EmailTemplate.associate = function(models) {
    // associations can be defined here
  };
  return EmailTemplate;
};

