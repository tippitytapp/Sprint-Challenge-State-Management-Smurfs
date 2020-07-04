// Update with your config settings.
require('dotenv').config();
const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'smurfs',
      user: 'postgres',
      password: 'marctapp'
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
