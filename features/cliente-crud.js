var clienteModel = require('../models/cliente');
var connection = require('../config/sequelize'); 
clienteModel = clienteModel(connection,require('sequelize').DataTypes);

module.exports = {
    create : async function(_nome,_sobrenome,_email, _produto,_corpoemail){
        let item = await clienteModel.build({ nome: _nome, sobrenome:_sobrenome, email: _email, produto:_produto, corpoemail:_corpoemail })
        .save()           
        return [true,item.id]
    },
    update:async function(_id,_nome,_sobrenome,_email, _produto){
        return await clienteModel.update(
            { nome: _nome, sobrenome:_sobrenome, email: _email, produto:_produto },
            { where: { id: _id }})                                              
    },
    readById : function(_id){
        return clienteModel.findAll({
            where: {
              id: _id }
          });
    },
    readBySobreNome :async function(_sobrenome){
        let item = await clienteModel.findAll({
            where: {sobrenome: _sobrenome}})
        return item[0].dataValues      
    },
    deleteById : function(_id){
        return clienteModel.destroy({
            where: { id: _id }  });
    },
    readAll :async function(_sobrenome){
        let item = await clienteModel.findAll()
        return item[0].dataValues      
    }
};


/*
var emailModel = require('../models/emailpadrao');
var connection = require('../config/sequelize'); 
emailModel = emailModel(connection,require('sequelize').DataTypes);


*/