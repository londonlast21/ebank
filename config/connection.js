require('dotenv').config();

const Sequelize = require('sequelize');

// check the input being used
console.log(process.env.DB_USER, process.allowedNodeEnvironmentFlags.DB_PW);
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
        
      },
    });

module.exports = sequelize;
