const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Service = sequelize.define('Service',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    service1: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    service2: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    service3:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    service4:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
})

module.exports = Service;