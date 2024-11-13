const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("./db");
const { Timestamp } = require("mongodb");



const User = sequelize.define(
    "User",
    {
        user_num: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        Timestamp: false,
    }
);

module.exports = User;