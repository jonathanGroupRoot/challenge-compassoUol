const express = require("express");
const routes = express.Router();

const CityController = require("./controllers/CityController");
const ClientController = require("./controllers/ClientController");

//CITY
routes.get("/listenCity", CityController.listenCity);
routes.get("/filterCityName", CityController.filterCityName);
routes.get("/filterStateName", CityController.filterStateName);
routes.post("/createCity", CityController.createCity);

//CLIENT
routes.get("/filterClientName", ClientController.filterClientName);
routes.get("/consultCustomerById/:client_id", ClientController.consultCustomerById);
routes.post("/createClient/:city_id", ClientController.createClient);
routes.put("/updateClient/:client_id", ClientController.updateClient);
routes.delete("/deleteClient/:client_id", ClientController.deleteClient);

module.exports = routes;