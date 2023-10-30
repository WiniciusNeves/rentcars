const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pagina inicial/index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'pagina inicial', 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'pagina inicial', 'script.js'));
});

app.get('/CriarEntrada', function(req, res) {
    res.sendFile(__dirname + '/CriarEntrada/index.html');
})

app.get('/AtualizarEntrada', function(req, res) {
    res.sendFile(__dirname + '/AtualizarEntrada/index.html');
})


app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000 ou http://localhost:3000');
});
