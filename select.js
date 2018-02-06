const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM messages;', (err, data) => {
  if (err) throw err;
  for (let row of data.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});