var emailModel = require('../models/emailtemplate');
var connection = require('../config/sequelize'); 
emailModel = emailModel(connection,require('sequelize').DataTypes);

module.exports = {
    create : function(_titulo,_alias,_corpo){
        return new Promise(
            function(resolve,reject){
                emailModel.build({ titulo: _titulo, alias:_alias, corpo: _corpo })
                .save()
                .then( function(item){
                    resolve([true,item.id]) 
                })      
                .catch( x=> reject(x) )                
            }
        )
    },
    updateEmail:async function(_id,_titulo,_alias,_corpo){
        return await emailModel.update(
            { titulo: _titulo, alias:_alias, corpo: _corpo },
            { where: { id: _id }})                                              
    }, 
    updateEmailAlias:async function(_titulo,_alias,_corpo){
        return await emailModel.update(
            { titulo: _titulo, alias:_alias, corpo: _corpo },
            { where: { alias: _alias }})                                              
    }, 
    readById : function(_id){
        return emailModel.findAll({
            where: {
              id: _id
            }
          });
    },
    readByTitulo : async function(_titulo){
        let item = await emailModel.findAll({
            where: {titulo: _titulo}})
        return item[0].dataValues      
    },
    readByAlias : async function(_alias){
        let item = await emailModel.findAll({
            where: {alias: _alias}})
        return item[0].dataValues      
    },
    deleteByAlias : function(_alias){
        return emailModel.destroy({
            where: {
              alias: _alias
            }
          });
    },
    readAll: async function(_alias){
        let item = await emailModel.findAll()
        if(item.length>0){
            return item;
        }
        return null;              
    },

};





