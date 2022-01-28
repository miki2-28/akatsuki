/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	db_schema
	db_host
	db_username
	db_password
Amplify Params - DO NOT EDIT */

const mysql = require('mysql2/promise');

exports.handler = async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.db_host,
    database: process.env.db_schema,
    user: process.env.db_username,
    password: process.env.db_password,
  });

  const [rows, fields] = await connection.execute(event.arguments.query);
  console.log(rows);
  await connection.end();
  return rows;
};
