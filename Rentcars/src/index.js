(async () => {
  const database = require('./db');
  const Veiculo = require('./veiculos');
  await database.sync();
})();
