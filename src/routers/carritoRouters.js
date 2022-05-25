const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController.js");

//TODOS SON GET PORQUE SOLO VAMOS A MSOTRAR PAGINA
router.get("/", carritoController.index);

router.get("/createCar", carritoController.createCarIndex);
router.post("/createCar", carritoController.createCar);

module.exports = router;
