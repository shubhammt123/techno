const express = require("express");
const { getUsers , createUser , updateUser , deleteUser } = require("../controller/user");
const middleWare1 = require("../middleware/middleware1");

const router = express.Router();

router.get("/user"  , middleWare1  ,  getUsers);

router.post("/user", createUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;