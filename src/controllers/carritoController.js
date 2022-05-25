const path = require("path");

const carritoController = {
  index: async (req, res) => {
    return res.render("car");
  },

  createCarIndex: async (req, res) => {
    return res.send("car");
  },

  createCar: async (req, res) => {
    const inputlocal = req.body;
    console.log("entra al createCar");
    console.log(inputlocal);
    res.send(inputlocal);
  },
};

module.exports = carritoController;
