const express = require('express');
const path = require('path');
const router = require('./route');
const api = require('./server');
const app = express();

app.use(router);

app.use(api);
app.use(express.static('public'));

const port = 3000;

app.listen(port, function() {
    console.log('Servidor rodando na porta ' + port + ' ou http://localhost:3000');
});
