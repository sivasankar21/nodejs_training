//const Sequelize = require("sequelize");



//const sequelize = require("../util/database");



module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define("Users", {

    u_id: {

      type: DataTypes.UUID,

      primaryKey: true,

      defaultValue: DataTypes.UUIDV4,

      allowNull: false

    },

    username: {

      type: DataTypes.STRING,

      required: true

    },

    role: {

      type: DataTypes.ENUM,

      values: ["user", "admin", "disabled"]

    },

    createdAt: {

      field: "created_at",

      type: DataTypes.DATE

    },

    updatedAt: {

      field: "updated_at",

      type: DataTypes.DATE

    },

    deletedAt: {

      field: "deleted_at",

      type: DataTypes.DATE

    }

  });

  return Users;

};



// module.exports = Users;