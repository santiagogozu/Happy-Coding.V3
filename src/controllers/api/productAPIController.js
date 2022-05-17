const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const {Op} = require("sequelize");
const moment = require("moment");

const Product = db.Product;
const User = db.User;

const productAPIController = {
  listProduct: async (req, res) => {
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          //Op.or operador or
          //Op.like operador buscar y entre % para buscar en todo el texto
          {name: {[Op.like]: "%" + req.params.search + "%"}},
          {price: {[Op.like]: "%" + req.params.search + "%"}},
          {description: {[Op.like]: "%" + req.params.search + "%"}},
        ],
      },
    });
    const response = {
      meta: {
        status: 200,
        total: products.length,
        url: "/api/products",
      },
      data: products,
    };
    res.json(response);
  },

  User: async (req, res) => {
    const users = await User.findAll();
    const response = {
      meta: {
        status: 200,
        total: users.length,
        url: "/api/users",
      },
      data: users,
    };
    res.json(response);
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "/api/product/:id",
        },
        data: products,
      };
      res.json(respuesta);
    });
  },

  filterProduct: (req, res) => {
    db.Product.findAll({where: {id: req.params.id}}).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "/api/product/:id",
        },
        data: products,
      };
      res.json(respuesta);
    });

    //   try {
    //     const products = await db.Product.findAll({
    //       where: {
    //         name: req.params.id,
    //       },
    //     });
    //     return res.render("tshirts", {products});
    //   } catch (error) {
    //     return res.send(error);
    //   }
  },
  // search: async (req, res) => {
  //   try {
  //     const products = await db.Product.findAll({
  //       where: {
  //         name: req.params.id,
  //       },
  //     });
  //     return res.render("tshirts", {products});
  //   } catch (error) {
  //     return res.send(error);
  //   }
  // },

  //   db.Product.findAll(req.params.id).then((products) => {
  //     let respuesta = {
  //       meta: {
  //         status: 200,
  //         total: products.length,
  //         url: "/api/product/:id",
  //       },
  //       data: products,
  //     };
  //     res.json(respuesta);
  //   });
  // },

  // tshirts: async (req, res) => {
  //   try {
  //     const products = await db.Product.findAll({
  //       where: {
  //         id_categorie: 1,
  //       },
  //     });
  //     return res.render("tshirts", {products});
  //   } catch (error) {
  //     return res.send(error);
  //   }
  // },
};

module.exports = productAPIController;
