import sequelize from 'sequelize';

const { sequelize, DataTypes } = require('sequelize');
const userschema = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'employee', 'maintenance'),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, { timestamps: false });

module.exports = User;