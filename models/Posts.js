

module.exports = (sequelize,DataTypes) => { 

  const Posts = sequelize.define('posts', {
  
  p_id: {
  
        type: DataTypes.UUID,
  
        primaryKey: true,
  
        defaultValue: DataTypes.UUIDV4,
  
        allowNull: false
  
      },
  
      UserUId: {
  
        type: DataTypes.UUID,
  
        allowNull: false
  
      },
  
      content: {
  
        type: DataTypes.TEXT,
  
        required: true
  
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
  
    return Posts;
  
  };
  
    //module.exports=Posts;