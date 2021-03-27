
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')
const Plan = sequelize.define('Plan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    image:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },

    plans: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
    membershipPlan: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        
    },
})

module.exports = Plan;