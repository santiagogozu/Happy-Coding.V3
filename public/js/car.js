function carrito(id, cantidad) {
  const lista = {
    id: id,
    cantidad: cantidad,
  };
  let datos = localStorage.getItem("datos");

  if (datos != null && datos != "") {
    let arr1 = datos.split(",");
    arr1.push(JSON.stringify(lista));
    localStorage.setItem("datos", arr1);
  } else {
    localStorage.setItem("datos", JSON.stringify(lista));
  }
}

window.addEventListener("load", function () {
  const input = document.querySelector(".cantidadProductoDetalle");
  const log = document.getElementById("valores");
  let agregar = document.querySelector(".button");




  
  input.addEventListener("input", updateValue);

  function updateValue(e) {
    log.textContent = e.srcElement.value;
  }

  agregar.addEventListener("click", function (e) {
    agregar.classList.add("cargando");
    setTimeout(() => agregar.classList.remove("cargando"), 3700);

    const cantidad = log.innerHTML;
    // console.log(cantidad);
    carrito(e.target.id, cantidad);
  });
});
