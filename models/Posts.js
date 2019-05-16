const Sequelize=require('sequelize');

const sequelize=require('../util/database');
module.exports = (sequelize,Sequelize) => { 
const Posts = sequelize.define('posts', {
p_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    u_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      required: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  });
}
  module.exports=Posts;