const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('learning', 'root', 'SANKAR.21',
{
dialect: 'mysql',
host: 'localhost',
port: '3306',
logging: false
});
sequelize.authenticate()
.then(function () {
console.log("MariaDB Connection Established");
// logger.info("MariaDB Connection Established");
})
.catch(function (err) {
//console.log("Error Connecting to Database" + err);
// logger.error("Error Connecting to Database" + err);
})
.done();
module.exports = sequelize;

//const env = require('./env');

// var sequelize = new Sequelize("learning", "root", "SANKAR.21", {

//   host: "localhost",

//   port: 3306,

//   dialect: "mysql",



//   logging: false,

//   pool: {

//     max: 30,

//     min: 0,

//     idle: 10000

//   }

// });

// ///const connections = {};

// //connections.connection = connection;

// //connections.sequelize = sequelize;

// //Models/tables

// //const db = {};





// // db.Sequelize = Sequelize;

// // db.sequelize = sequelize;





// // //Models/tables

// // db.users = require("../models/Users")(sequelize, Sequelize);

// // db.posts = require("../models/Posts")(sequelize, Sequelize);

// // db.comments = require("../models/Comments")(sequelize, Sequelize);

// // //Relations

// // db.comments.belongsTo(db.posts);

// // db.posts.hasMany(db.comments);

// // db.posts.belongsTo(db.users);

// // db.users.hasMany(db.posts);



// module.exports = {
// sequelize:sequelize
// }