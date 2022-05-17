const fs = require("fs");
const path = require("path");

const userLoginFilePath = path.join(__dirname, "../data/usersLoginInfo.json");
const usersLoginInfo = JSON.parse(fs.readFileSync(userLoginFilePath, "utf-8"));

const userFilePath = path.join(__dirname, "../data/userDataBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const token = (req, res, next) => {
  // if (req.cookies.rememberToken) {
  //   const userToken = usersLoginInfo.find(
  //     (user) => (user.token = req.cookies.rememberToken)
  //   );
  //   if (userToken) {
  //     req.session.username = userToken.username;
  //     res.locals.token = userToken.username;
  //     res.locals.admin = userToken.admin;
  //     console.log(userToken.admin);
  //   }
  // }
  next();
};

module.exports = token;
