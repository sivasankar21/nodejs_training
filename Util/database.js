

const sequelize = require('sequelize');

var connection = new sequelize('learning','root','SANKAR.21', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  //operatorsAliases: Op, // use Sequelize.Op.
  logging: false,
  pool: {
    max: 30,
    min: 0,
    idle: 10000
  }
});
 
connection.authenticate()
  .then(function () {
    console.log("MariaDB Connection Established");    
    // logger.info("MariaDB Connection Established");
  })
  .catch(function (err) {
    console.log("Error Connecting to Database" +err);
    // logger.error("Error Connecting to Database" + err);
  })
  .done();

module.exports = connection;