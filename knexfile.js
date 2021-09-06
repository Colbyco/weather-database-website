require('dotenv').config();
let sslConfig = undefined;
if (process.env.NODE_ENV === 'production') {
    sslConfig = {
        rejectUnauthorized: false,
    };
}
module.exports = {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: sslConfig,
    },
    searchPath: ['public'],
};
