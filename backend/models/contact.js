const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Contact = sequelize.define('Contact',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    address: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    email: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    phone:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    subject:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    details: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    }
})

module.exports = Contact;