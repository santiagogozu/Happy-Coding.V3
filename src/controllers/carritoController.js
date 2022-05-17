const path = require("path");

const carritoController = {
  index: async (req, res) => {
    return res.render("car");
  },

  createCar: async (req, res) => {
    return res.render("car");
  },
};

module.exports = carritoController;
