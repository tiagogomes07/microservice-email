var express = require("express");
const app = express();
const email = require("./features/email-envio.js");
const emailTemplateCrud = require("./features/email-template-crud");
const clientCrud = require("./features/cliente-crud");
const cors = require("cors");
const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/", function(req, res) {
  res.render("home/index");
});

app.get("/enviar/:email/:titulo/:assunto/:repetir?", function(req, res) {
  let repetir = req.params.repetir;
  let assunto = req.params.assunto;
  let emailadress = req.params.email;
  let titulo = req.params.titulo;

  if (repetir) {
    for (let index = 0; index < repetir; index++) {
      email.send(emailadress, titulo, assunto).then(function() {});
    }
    res.send(`Email enviado ${repetir} vezes com suceso para ${emailadress}`);
  } else {
    email
      .send(req.params.email, req.params.titulo, req.params.assunto)
      .then(function() {
        console.log(x);
      });
    res.send(`Email enviado com suceso para ${emailadress}`);
  }
});

//métodos negocio

app.post("/email/envio", function(req, res) {
  //obter o template de email pelo alias
  let alias = req.body.alias;
  let template = emailTemplateCrud.readByAlias(alias);
  let email = req.body.email;
  let titulo = req.body.titulo;
  let nome = req.body.nome;
  let sobrenome = req.body.sobrenome;
  let produto = req.body.produto;

  // to do
  // fazer os replaces do nome, sobrenome,email,

  // gravar o histórico de email o banco

  clientCrud.create(nome, sobrenome, email, produto, template);

  email.send(email, titulo, template);
  res.send(`Email enviado, e registrado com sucesso!`);
});

app.get("/email/enviadoshistorico", function(req, res) {
  res.send(clientCrud.readAll());
});

//crud templates
app.post("/template/cadastrar", function(req, res) {
  emailTemplateCrud.create(req.body.titulo, req.body.alias, req.body.corpo);
  res.send(`Cadastrado com sucesso!`);
});

app.get("/template/cadastrar/:alias/:titulo/:corpo", function(req, res) {
  emailTemplateCrud.create(
    req.params.titulo,
    req.params.alias,
    req.params.corpo
  );
  res.send(`Cadastrado com sucesso!`);
});

app.get("/template", async function(req, res) {
  let result = await emailTemplateCrud.readAll();
  res.send(result);
});

app.put("/template/update/:alias/:titulo/:corpo", function(req, res) {
  emailTemplateCrud.updateEmailAlias(
    req.params.titulo,
    req.params.alias,
    req.params.corpo
  );
  res.send(`Atualizado com sucesso!`);
});

app.delete("/template/delete/:alias", function(req, res) {
  emailTemplateCrud.deleteByAlias(req.params.alias);
  res.send(`Deletado com sucesso!`);
});

//ideias
//ok cadastrar template
//ok consultar template por nome-chave
//ok substituir informações do template
//ok chamar o metodo de email enviando nome, sobrenome, email, e chave do modelo de email

//estatisticas
//gravar hora e dia do email e para quem foi enviado
const port = 2999;
app.listen(port);
console.log(`subindo na porta ${port}`);
