const { Sequelize } = require("sequelize");
const db = require("../config/database");

//MODEL
const City = require("../model/City");
const Client = require("../model/Client");

const connection = new Sequelize(db);

City.init(connection);
Client.init(connection);

City.associate(connection.models);
Client.associate(connection.models);

module.exports = connection;

