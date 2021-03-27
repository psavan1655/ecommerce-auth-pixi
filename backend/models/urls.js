const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Urls = sequelize.define('Urls',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    header:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    footer: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    social: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    app:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    }
})

module.exports = Urls;