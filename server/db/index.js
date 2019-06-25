const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/clothing-app', {
    logging: true
})


module.exports = conn;