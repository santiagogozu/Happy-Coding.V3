const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
// const router=express.Router()
const methodOverride = require("method-override"); //utilizado para put y delet

const rutasMain = require("./routers/mainRouters.js"); //Se conecta con el archivo routers
const rutasProduct = require("./routers/productRouters.js"); //Se conecta con el archivo routers
const rutasUser = require("./routers/userRouters.js"); //Se conecta con el archivo routers
const api = require("./routers/apiRouters"); //Se conecta con el archivo routers
const carrito = require("./routers/carritoRouters"); //Se conecta con el archivo routers

const session = require("express-session");

app.set("view engine", "ejs"); // configura express para motor de plantilla para las vistas de la aplicacion

app.use(express.urlencoded({extended: false})); //configruacion previo para post campurar el formulario en objesto lierrio, si no colcoamos esto no podemos capturar formulario
app.use(express.json()); //configruacion previo para post

app.use(methodOverride("_method"));

app.use(
  session({
    secret: "sticker wizzard",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());

//Rutas del views y carpeta publica
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.static(path.resolve(__dirname, "../public")));

// const midelwareAutentication = require("./midelware/autentication");
const token = require("./midelware/token.js");
app.use(token);

const userMiddleware = require("./midelware/userMiddleware.js");
app.use(userMiddleware);

//Rutas de pagina
app.use("/", rutasMain);
app.use("/product", rutasProduct);
app.use("/user", rutasUser);
app.use("/api", api);
app.use("/car", carrito);
app.use((req, res, next) => {
  res.status(404).render("error404");
});
//Servidor
app.listen(process.env.PORT || 3002, function () {
  console.log("Servidor funcionando");
});
