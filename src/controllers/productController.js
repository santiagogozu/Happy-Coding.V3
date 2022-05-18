const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const userController = {
  // MUSTRA PAGINA PRODUCTOS CREATE
  index: (req, res) => {
    res.render("productCreate");
  },

  // SE CREA PRODUCTO
  create: async (req, res) => {
    const {name, price, category, description, image} = req.body;
    const nuevoProducto = {
      name: name,
      price: price,
      id_categorie: category,
      description: description,
      image: req.file.filename,
    };
    await db.Product.create(nuevoProducto);
    res.redirect("/");
  },

  // MUESTREA PAGINA PARA EDITAR PRODUCTOS
  edit: async (req, res) => {
    let id = req.params.id;
    let productToEdit = await db.Product.findByPk(id);
    res.render("productEdit", {productToEdit});
  },

  // EDITAMOS PRODUCTOS
  update: async (req, res) => {
    try {
      const id = req.params.id;
      let image;
      let product = await db.Product.findByPk(id);

      // COMPARAMOS SI CAMBIAMOS LA IMAGEN POR UNA NUEVA, SI NO ES ASI, GUARDAMOS LA IMAGEN ANTERIOR
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = product.image; //SE DEBE COLOCAR LA IMAGEN GUARDADA EN LA BASE DE DATOS
      }

      let productToEdit = {
        name: req.body.name,
        price: req.body.price,
        id_categorie: req.body.category,
        description: req.body.description,
        image: image,
      };

      await db.Product.update(productToEdit, {
        where: {id: id},
      });
      res.redirect("/");
    } catch (error) {
      return res.send(error);
    }
  },

  // MUESTRA EL DETALLE DEL PRODUCTO SELECCIONADO
  detail: async (req, res) => {
    try {
      let id = req.params.id;
      let product = await db.Product.findByPk(id);
      res.render("productDetail.ejs", {product});
    } catch (error) {
      return res.send(error);
    }
  },

  // BORRAMOS EL PRODUCTO
  delete: async (req, res) => {
    try {
      let id = req.params.id;
      await db.Product.destroy({
        where: {id},
      });
      res.redirect("/");
    } catch (error) {
      return res.send(error);
    }
  },

  // lista: (req, res) => {
  //   res.send("lista de prodcutos");
  // },
};

module.exports = userController;
