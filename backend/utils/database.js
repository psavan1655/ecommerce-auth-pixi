const Sequelize = require('sequelize');


const sequelize = new Sequelize('photo_website', 'photo_website', 'jN5ze!aML$Pz', {
    host: "103.120.177.189",
    dialect: "mysql"
});

module.exports = sequelize;