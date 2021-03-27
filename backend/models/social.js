const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Social = sequelize.define('Social',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Review:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
    },
    fbToken: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    fbId:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    instaId: {
        type: DataTypes.STRING,
        allowNull: false,  
    }
});


module.exports = Social;