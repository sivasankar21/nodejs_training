const Sequelize = require("sequelize");

const sequelize = require("../util/database");
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE
    }
  );
  }

module.exports=Users;