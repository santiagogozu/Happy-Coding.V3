window.addEventListener("load", function () {
  let formulario = document.querySelector(".buscador");
  formulario.addEventListener("submit", function (e) {
    const query = e.target[0].value;
    console.log(query);
    const ruta = `http://localhost:3000/${query}/`;
    formulario.action = ruta;
  });
});
