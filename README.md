# Rentcars
Este repositório é dedicado ao desafio da Rentcars.

## Front-end
- HTML5
- CSS3
- JavaScript

## Back-end
- Node.js
- Express.js
- Sequelize.js
- Nodemon
- Body-parser

# Estrutura de Organização
Criei uma pasta chamada "Páginas" que contém os arquivos iniciais index.html/style.css/script.js, além de duas pastas adicionais: uma para criar entradas e outra para atualizar entradas. A pasta de Front-end contém os códigos, enquanto o Back-end possui os arquivos database.js, router.js e server.js. Uma observação importante é que a pasta "node_modules" foi excluída devido ao seu tamanho.


### Configurar e iniciar o projeto (Backend/Frontend)
```bash
mkdir desafio-rentcars
```
```bash
cd desafio-rentcars
```

```bash
npm install 
```

```bash
npm start
```

para iniciar o projeto 

### Utilizar npm.

## obs por favor na parte de id so coloque número crescentes tipo 1,2,3... se não o código vai bugar 

## Instalação das dependências do Backend:

```bash
npm install express
```

```bash
npm install mysql2
```

```bash
npm install sequelize
```

```bash
npm install nodemon --save-dev
```

```bash
npm install bodyparsor
```
### Docker:
Neste projeto, não foi utilizado o Docker devido a problemas técnicos, especialmente no caso de usuários do Windows. Entrei em contato com os representantes do projeto, que informaram que a ausência do Docker não é um problema.

### MySQL:
Ao acessar o projeto pela primeira vez, é recomendável, para evitar problemas técnicos, ir até a pasta "database" e descomentar o comando "//connection.sync({force: true})". Esse comando força a sincronização com o banco de dados. Após executá-lo uma vez, comente-o novamente. Caso ocorra algum erro, verifique se criou previamente o banco de dados no MySQL com o nome da database "testing", utilizando o usuário "root" e a senha "ANSKk08aPEDbFjDO" (ambos obrigatórios)

### URL
"O servidor está localizado na porta 3000 ou, se preferir, [http://localhost:3000](http://localhost:3000).
obs. por favor so cliclk no meio da botão a onde esta em azul

