
const mode = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000

const db = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || '27017',
  host: process.env.DB_HOST || '127.0.0.1',
  database: process.env.DB_NAME || 'userData'
};

module.exports = {
  db
};
