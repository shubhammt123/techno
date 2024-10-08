const express = require("express");
const auth = require("../middleware/auth");
const { signup , login , getAllUsers  , updateUser } = require("../controller/user");

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/getAllUser",auth("Admin"),getAllUsers);
router.put("/user/:id",auth("Admin"),updateUser);



module.exports = router;