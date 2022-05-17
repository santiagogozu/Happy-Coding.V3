module.exports = (req, res, next) => {
  console.log("entra al midelware");
  next();
};
