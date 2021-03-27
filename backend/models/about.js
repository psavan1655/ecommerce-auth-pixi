const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const About = sequelize.define('About',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    image:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    text: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    }
})

module.exports = About;