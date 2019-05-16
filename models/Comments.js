const Sequelize = require("sequelize");

const sequelize = require("../util/database");
module.exports = (sequelize,Sequelize) => {
  const Comments = sequelize.define('comments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    p_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      required: true
    },
    commenter_username: {
      type: DataTypes.STRING,
      required: true
    },
    commenter_email: {
      type: DataTypes.STRING,
      required: true
    },
    status: {
      type: DataTypes.ENUM,
      values: ['approved', 'rejected', 'in review']

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });}

module.exports=Comments;