const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const {validationResult} = require("express-validator");

const mainController = {
  // MOSTRAR PAGINA HOME
  home: (req, res) => {
    return res.render("home", {});
  },

  // MOSTRAR PAGINA TSHIRTS
  tshirts: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          id_categorie: 1,
        },
      });
      return res.render("tshirts", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  // MOSTRAR PAGINA SOCKS
  socks: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          id_categorie: 2,
        },
      });
      return res.render("socks", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  // MOSTRAR PAGINA BAGS
  bags: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          id_categorie: 3,
        },
      });
      return res.render("bags", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  // MOSTRART PAGINA HODDIES
  hoodies: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          id_categorie: 4,
        },
      });
      return res.render("hoodies", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  // MOSTRAR PAGINA HATS
  hats: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          id_categorie: 5,
        },
      });
      return res.render("hats", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  // BARRA DE BUSQUEDA
  search: (req, res) => {
    // let busquedaDeUsuario=req.query.query
    // res.send(busquedaDeUsuario)
  },

  // MOSTRAR PAGINA LOGIN
  login: (req, res) => {
    return res.render("login");
  },

  logout: async (req, res) => {
    // Borramos el registro de la base de datos si existe
    if (req.cookies.rememberToken) {
      console.log("entra al logout");
      try {
        let token = req.cookies.rememberToken;
        console.log("este es el token a buscar " + token);
        await db.UserLogin.destroy({
          where: {token},
        });
        console.log(db.UserLogin.findAll());
      } catch (error) {
        return res.send(error);
      }
    }
    // Destruimos la sesión

    req.session.destroy();

    // Destruimos la cookie de recordar
    res.clearCookie("rememberToken");

    // Redirigimos a la home
    res.redirect("/");
  },

  productList: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      return res.render("productList", {products});
    } catch (error) {
      return res.send(error);
    }
  },

  userList: async (req, res) => {
    try {
      const users = await db.User.findAll();
      return res.render("userList", {users});
    } catch (error) {
      return res.send(error);
    }
  },

  userDetail: async (req, res) => {
    try {
      // return res.render("userDetail");
      // // let username = locals.username;
      let username = req.session.username;
      const user = await db.User.findOne({where: {username: username}});
      return res.render("userDetail", {user});
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = mainController;
