const conn = require('../index');


const Clothing = conn.define('clothing', {
    name: {
        type: conn.Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() => Clothing.create({ name: 'foo' }))
}


module.exports = { Clothing, syncAndSeed };