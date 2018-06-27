const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

//экземпляр класса Client для взаимодействия с базой данных
const client = new pg.Client(connectionString);
//Установка связи 
client.connect();
//запускаем SQL запрос с помощью query() метода
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });