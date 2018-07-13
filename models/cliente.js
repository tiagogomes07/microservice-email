'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    produto: DataTypes.STRING,
    emailEnviado:DataType.STRING
  }, {
    tableName: 'Cliente',
  });
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};