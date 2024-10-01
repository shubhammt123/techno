const express = require("express");
const upload = require("../middleware/multer");
const auth = require("../middleware/auth");
const { getAllProduct , createProduct , updateProduct , updateProductWithImage } = require("../controller/product")
const router = express.Router();


router.get("/product",getAllProduct);
router.post("/product",auth("Admin"),upload.single("productImage"),createProduct);
router.put("/product/:id",auth("Admin"),updateProduct);
router.put("/productWithImage/:id",auth("Admin"),upload.single("productImage"),updateProductWithImage);

module.exports = router;