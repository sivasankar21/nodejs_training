// const Sequelize = require("sequelize");

// const sequelize = require("../util/database");

module.exports = (sequelize,DataTypes) => {

  const Comments = sequelize.define('comments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    postPId: {
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

  return Comments;
};