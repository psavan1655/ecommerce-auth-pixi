const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Whypod = sequelize.define('Whypod',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    image:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    details: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
})

module.exports = Whypod;