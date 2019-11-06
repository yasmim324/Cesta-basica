const mongoose = require("mongoose");
const express = require("express");
const server = express();

server.use(express.json());

mongoose.connect("mongodb://localhost:27017/backend-trabalho",{
    useNewUrlParse:true,
    useUnifieTopology:true,
});
const routes = require("./routes");
server.use(routes);
server.listen(3333);
