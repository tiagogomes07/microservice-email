const assert = require('assert');
const emailtemplate = require('../features/email-template-crud');
let idcreated = 0;

describe('email template',function(){
    it('create',async function(){
        let result = await emailtemplate.create('Modelo1','alias1','Corpo1');
        idcreated = result[1];
        assert.equal(true,result[0]);
    }),
    it('updateEmail',async function(){
        let result = await emailtemplate.updateEmail(idcreated,'Modelo1','alias1','CorpoEmail1')
        assert.equal(result.length,1);
    })
    it('readById',async function(){
        let result = await emailtemplate.readById(idcreated);
        assert.equal('Modelo1',result[0].dataValues.titulo);
    }),
    it('readByTitulo',async function(){
        let result = await emailtemplate.readByTitulo('Modelo1');
        assert.equal(JSON.stringify(['Modelo1','CorpoEmail1']), JSON.stringify([result.titulo,result.corpo]));
    }),
    it('readByAlias',async function(){
        let result = await emailtemplate.readByAlias('alias1');
        assert.equal(JSON.stringify(['Modelo1','CorpoEmail1']), JSON.stringify([result.titulo,result.corpo]));
    })

    it('deleteByAlias',async function(){
        let result = await emailtemplate.deleteByAlias('alias1');        
        assert.equal(1,result);
    })
})

