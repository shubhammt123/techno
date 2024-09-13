const express = require("express");
const users = require("../user");
const { getUser , createUser , updateUser , deleteUser } = require("../controller/user");
const middleware = require("../middleware/middleware");


const router = express.Router();

router.get("/users" ,getUser);

router.post("/users",   createUser);

router.put("/users/:id",updateUser);

router.delete("/users/:id",deleteUser);

module.exports = router;

// Model , view , controller

// index.js >> router >> controller >> Model