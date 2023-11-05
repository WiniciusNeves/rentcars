// Importando as bibliotecas 'sequelize' e 'express'
const sequelize = require('sequelize')
const express = require('express')
const router  = require('./router')
const bodyparser = require('body-parser')
const server = require('./config/database')
// Importando o módulo 'Sequelize' da biblioteca 'sequelize'


// Criando uma instância do aplicativo Express
const app = express()
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
// Usando o middleware express.json() para analisar os corpos das requisições como JSON
app.use(express.json());

// Rotas do aplicativo
app.use(router);
app.use(express.static('public'));

// Iniciando o servidor na porta 3000
const port = 3000

app.listen(port, () => {
  console.log(`Rotando na porta ${port} ou aqui esta o server http://localhost:3000`)
})