const Sequelize = require("sequelize");
//const env = require('./env');
var sequelize = new Sequelize("learning", "root", "SANKAR.21", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",

  logging: false,
  pool: {
    max: 30,
    min: 0,
    idle: 10000
  }
});
///const connections = {};
//connections.connection = connection;
//connections.sequelize = sequelize;
//Models/tables
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Models/tables
db.users = require("../models/users.js")(sequelize, Sequelize);
db.comments = require("../models/comments.js")(sequelize, Sequelize);
db.posts = require("../models/posts.js")(sequelize, Sequelize);

//Relations
db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);

module.exports = db;
