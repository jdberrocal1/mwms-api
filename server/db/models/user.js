'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: DataTypes.BOOLEAN,
  },{
    classMethods: {
      associate: function (models) {
        // this.hasMany(models.Inventories);
        // this.belongsToMany(models.Inventories, {
        //   through: 'UserInventory',
        //   foreignKey: 'id'
        // });
      }
    },
    // instanceMethods: {
    //   authenticate: function (plainTextPword) {
    //     return bcrypt.compareSync(plainTextPword, this.password);
    //   },
    //   encryptPassword: function(plainTextPword){
    //     return !plainTextPword ? '' : bcrypt.hashSync(plainTextPword, bcrypt.genSaltSync(10));
    //   }
    // }
  });

  return Users;
};