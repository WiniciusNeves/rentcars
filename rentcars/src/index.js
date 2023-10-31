(async () => {
  const database = require('./db');
  const Produto = require('./produto');
  await database.sync();
})();