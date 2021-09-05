const app = require("./app");

//Connection DB
require ("./database/index.js");

app.listen(3000, () => {
    console.log("Server is running 3000");

});

module.exports = app;