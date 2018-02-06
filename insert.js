const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();
client.query('INSERT INTO Messages(msg) VALUES ($1);',['test'], (err, res) => {
  client.end();
  console.log("data added")
});