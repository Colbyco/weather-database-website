require('dotenv').config();
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL + '?ssl=true',
  searchPath: ['public'],
};
