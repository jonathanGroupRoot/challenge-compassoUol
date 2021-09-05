const express = require("express");
const routes = require("./routes.js");
const { json,urlencoded } = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const app = express();
app.use(urlencoded({extended: false}))
app.use(json());

const cors = require("cors");

app.use(cors());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(routes);

module.exports = app;