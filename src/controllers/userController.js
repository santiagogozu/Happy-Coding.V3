const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const {validationResult} = require("express-validator");
const {redirect} = require("express/lib/response");

const db = require("../database/models");

const userController = {
  // MUSTRA PAGINA LOGIN
  index: (req, res) => {
    res.render("login");
  },

  // CREAMOS NUEVO USUARIO
  create: async (req, res) => {
    let errors = validationResult(req); //CODIGO NECESARIO PARA VALIDAR LOS ERRORES DE EXPRESS VALIDATOR
    // COMPARADOR PARA VERIFICAR SI TENEMOS ERRORES EN EL LOGIN
    if (errors.isEmpty()) {
      const {username1, email1, pass1, pass2} = req.body;
      const nuevouser = {
        username: username1,
        email: email1,
        pass1: pass1,
        pass2: pass2,
        admin: false,
      };

      //encriptamos la contrasenia y borramos el password para q noo se guarde en nuestro json
      nuevouser.pass1 = bcrypt.hashSync(pass1, 10);
      await db.User.create(nuevouser);

      src = "//cdn.jsdelivr.net/npm/sweetalert2@11";
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Your work has been saved",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      res.redirect("/");
    } else {
      let validador = 1;
      return res.render("login", {errors: errors.errors, validador});
    }
  },

  // LOGUEAMOS AL USUARIO
  login: async (req, res) => {
    try {
      res.locals.username = false;
      let errors = validationResult(req); //CODIGO NECESARIO PARA VALIDAR LOS ERRORES DE EXPRESS VALIDATOR
      // COMPARADOR PARA VERIFICAR SI TENEMOS ERRORES EN EL LOGIN
      if (errors.isEmpty()) {
        const user = req.body.username;
        const password = req.body.pass;
        //verifico si el mail q puso en el formulario esta en nuestra db
        let userBusqueda = await db.User.findAll({
          where: {
            username: user,
          },
        });
        let [userVerificado] = userBusqueda;
        if (userVerificado) {
          // verificamos conrtaseña
          if (bcrypt.compareSync(password, userVerificado.pass1)) {
            if (userVerificado.admin == 1) {
              req.session.admin = true;
              res.locals.admin = true;
            }
            if (req.body.remember) {
              await db.UserLogin.create(userVerificado.dataValues);
              const token = crypto.randomBytes(64).toString("base64");
              // Lo guardamos en base, para poder chequearlo luego
              await db.UserLogin.update(
                {token: token},
                {
                  where: {id: userVerificado.id},
                }
              );
              // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
              res.cookie("rememberToken", token, {
                maxAge: 1000 * 60 * 60 * 24 * 90,
              });
            }
            // Finalmente lo mandamos a la home
            req.session.username = req.body.username;
            res.locals.username = req.session.username; // ***************************************************
            return res.redirect("/");
            // Si la contraseña esta mal
          } else {
            return res.render("login", {
              errors: {usuarios: "Invalid username or password  "},
            });
          }
        } else {
          // Si usuario esta mal
          return res.render("login", {
            errors: {usuarios: "Invalid Username "},
          });
        }
        //  res.redirect("/");
      } else {
        let validador = 1;
        res.render("login", {errors: errors.errors, validador});
      }
    } catch (error) {
      return res.send(error);
    }
  },

  // EDITAMOS AL USUARIO
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = users.find((product) => product.id == id);

    res.render("productEdit", {productToEdit});
  },

  update: (req, res) => {
    let id = req.params.id;
    console.log(req.body.name);
    let productToEdit = users.find((product) => product.id == id);

    let image;

    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = productToEdit.image;
    }

    productToEdit = {
      id: productToEdit.id,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      image: req.file ? req.file.filename : productToEdit.image,
    };

    let newusers = users.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = {...productToEdit});
      }
      return product;
    });

    fs.writeFileSync(userFilePath, JSON.stringify(newusers, null, " "));
    res.redirect("/");
  },

  detail: (req, res) => {
    console.log("entra a detail");
    let id = req.params.id;
    console.log(id);
    let product = users.find((product) => product.id == id);
    console.log(product);
    res.render("productDetail", {product});
  },

  // BORRAMOS EL PRODUCTO
  delete: async (req, res) => {
    try {
      let id = req.params.id;
      await db.User.destroy({
        where: {id},
      });
      res.redirect("/");
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = userController;
