const assert = require('assert');
const usuario = require('../features/cliente-crud');
let idcreated = 0;

describe('Cliente',function(){
    it('create',async function(){
        let result = await usuario.create('Tiago','Gomes','tiagogomes07@gmail.com','seguro veiculo','Prezado Senhor {nome} ..');
        idcreated = result[1];
        assert.equal(true,result[0]);
    }),
    it('updateEmail',async function(){
        let result = await usuario.update(idcreated,'Tiago','Gomes','tiagogomes07@gmail.com','seguro veiculo')
        assert.equal(result.length,1);
    })
    it('readById',async function(){
        let result = await usuario.readById(idcreated);
        assert.equal('Tiago',result[0].dataValues.nome);
    }),
    it('readByTitulo',async function(){
        let result = await usuario.readBySobreNome('Gomes');
        assert.equal(JSON.stringify(['Tiago','Gomes']), JSON.stringify([result.nome,result.sobrenome]));
    })
    it('deleteByAlias',async function(){
        let result = await usuario.deleteById(idcreated);        
        assert.equal(1,result);
    })
})