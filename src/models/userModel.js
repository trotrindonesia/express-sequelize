const Sequelize = require('sequelize');

const userModel = (db) => {
    const user = db.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING,
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },    
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        //prevent sequelize transform table name into plural
        freezeTableName: true,
    });

    return user;
}


module.exports = userModel;