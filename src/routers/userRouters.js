const express = require("express");
const userController = require("../controllers/userController");
const {check} = require("express-validator"); //CODIGO NECESARIO PARA EJECUTAR EXPRESS VALIDATOR
const router = express.Router();
const multer = require("multer");
const path = require("path");

// CODIGO NECESARIO PARA CARGAR IMAGENES
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({storage: storage});

const midelwareprueba = require("../midelware/prueba");

/*** CREAR USUARIO ***/
// SE ENVIA INFORMACION PARA REALIZAR EL EXPRESS VALIDATOR
router.get("/", userController.index);

router.post(
  "/create",
  upload.single("image"),
  [
    check("username1").notEmpty().withMessage("Nombre no puede ser vacio"),
    check("email1").notEmpty().withMessage("Email no puede ser vacio"),
    check("pass1").notEmpty().withMessage("Password no puede ser vacio"),
    check("pass2").notEmpty().withMessage("Password no puede ser vacio"),
  ],

  userController.create
);

router.post(
  "/login",
  [
    check("username").notEmpty().withMessage("Nombre no puede ser vacio"),
    check("pass").notEmpty().withMessage("Password no puede ser vacio"),
  ],
  userController.login
);

/*** DETALLE DE USUARIO ***/
router.get("/:id", userController.detail);

/*** EDITAR USUARIO ***/
router.get("/edit/:id", userController.edit);
router.put("/edit/:id", userController.update);

/*** ELIMINAR PRODUCTO ***/
router.delete("/delete/:id", userController.delete);

module.exports = router;
