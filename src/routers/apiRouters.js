const express = require("express");
const router = express.Router();
const productAPIController = require("../controllers/api/productAPIController");

//TODOS SON GET PORQUE SOLO VAMOS A MSOTRAR PAGINA
router.get("/products/:search", productAPIController.listProduct);
router.get("/users", productAPIController.User);
router.get("/product/:id", productAPIController.detail);
router.get("/filterProduct", productAPIController.filterProduct);

module.exports = router;
