const pg = require('pg');
const Pool = pg.Pool;

const config ={
    database: 'favorite_gifs',
    host: localhost,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 5000
}

const pool = new Pool(config);

module.exports = pool;