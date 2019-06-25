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


module.exports = Clothing;