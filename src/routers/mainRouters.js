const express = require("express");
const router = express.Router();
const mainControlers = require("../controllers/mainController");

//TODOS SON GET PORQUE SOLO VAMOS A MSOTRAR PAGINA
router.get("/", mainControlers.home);
router.get("/tshirts", mainControlers.tshirts);
router.get("/socks", mainControlers.socks);
router.get("/bags", mainControlers.bags);
router.get("/hoodies", mainControlers.hoodies);
router.get("/hats", mainControlers.hats);
router.get("/login", mainControlers.login);
router.post("/logout", mainControlers.logout);
router.get("/productList", mainControlers.productList);
router.get("/userList", mainControlers.userList);
router.get("/userDetail", mainControlers.userDetail);

module.exports = router;
