const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/script.js'));
});

app.get('/Criar.html', function(req, res) {
    res.sendFile(__dirname + '/Pagina/criar/Criar.html');

})
app.get('/Criar.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/criar/Criar.css'));
});

app.get('/Criar.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/criar/Criar.js'));
});


app.get('/Atualizar.html', function(req, res) {
    res.sendFile(__dirname + '/Pagina/atualizar/Atualizar.html');
})
app.get('/Atualizar.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/atualizar/Atualizar.css'));
});

app.get('/Atualizar.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/Pagina/atualizar/Atualizar.js'));
});


app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000 ou http://localhost:3000');
});
