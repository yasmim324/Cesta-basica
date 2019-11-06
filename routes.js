const {Router} = require("express");
const routes =  Router();
const UserController = require("./controllers/UserController");

routes.post("/user",UserController.store);
routes.put("/user:id",UserController.update);
routes.get("/user",UserController.list);
routes.delete("/user:id",UserController.destroy);
routes.post("/user:email",UserController.index);

module.exports = routes;