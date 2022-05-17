const fs = require("fs");
const path = require("path");

const userLoginFilePath = path.join(__dirname, "../data/usersLoginInfo.json");
const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginFilePath, "utf-8"));

const userFilePath = path.join(__dirname, "../data/userDataBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const db = require("../database/models");

const userMiddleware = async (req, res, next) => {
  // Es necasrio revisar el session ya que es el provenientes del login, no funciona el locals desde el controlador
  if (req.cookies.rememberToken) {
    let token = req.cookies.rememberToken;
    const userBusqueda = await db.UserLogin.findAll({
      where: {
        token: token,
      },
    });
    let [userToken] = userBusqueda;
    if (userToken) {
      req.session.username = userToken.username;
      req.session.admin = userToken.admin;
      res.locals.token = userToken.username;
    }
  }

  if (req.session.username) {
    res.locals.username = req.session.username;
  } else {
    res.locals.username = undefined;
  }
  if (req.session.admin == 1) {
    res.locals.admin = true;
  } else {
    res.locals.admin = false;
  }

  next();
};

module.exports = userMiddleware;
