const express = require("express");
const { getAllProduct , createProduct } = require("../controller/product");
const upload = require("../middleware/multer");
const router = express.Router();

router.get("/product",getAllProduct);
router.post("/product",upload.single("productImage"),createProduct);

module.exports =  router;