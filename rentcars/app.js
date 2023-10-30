const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/Criar.html', function(req, res) {
    res.sendFile(__dirname + '/Criar.html');

})
app.get('/Criar.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'Criar.css'));
});


app.get('/Atualizar.html', function(req, res) {
    res.sendFile(__dirname + '/Atualizar.html');
})
app.get('/Atualizar.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'Atualizar.css'));
});



app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000 ou http://localhost:3000');
});
