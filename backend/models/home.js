const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Home = sequelize.define('Home',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    slider:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    whyPod: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    services: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    plans:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    testimonials:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    clients:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    instagram:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    downloadApp:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    reviews:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
})

module.exports = Home;