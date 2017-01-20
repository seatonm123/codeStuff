module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pizza'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
