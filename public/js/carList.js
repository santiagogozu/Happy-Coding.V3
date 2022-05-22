window.addEventListener("load", function () {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  let str = localStorage.getItem("datos"); // capturamos el local storage
  let productosCarrito = JSON.parse("[" + str + "]"); // convuerte el string json en un array de objetos
  var productosUnicos = productosCarrito.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  const productosUnicos1 = JSON.stringify(productosUnicos);
  const productosUnicos2 = productosUnicos1.replace(/[[\]]/g, "");

  localStorage.setItem("datos", productosUnicos2); //convierte el JSON en string para guardarlo en el locarStorage

  var acumulador = 0;

  productosUnicos.forEach((productos, index) => {
    fetch(`http://localhost:3002/api/product/${productos.id}/`)
      .then(function (response) {
        return response.json();
      })
      .then(function (product) {
        let {id, id_categorie, image, name, price} = product.data;
        let cantidad = productosUnicos[index].cantidad;
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const espacio = document.createElement("br");
        const name1 = document.createElement("h1");
        const price1 = document.createElement("h1");
        const image1 = document.createElement("img");
        const cantidad1 = document.createElement("input");
        cantidad1.setAttribute("value", cantidad);
        cantidad1.setAttribute("type", "number");
        cantidad1.setAttribute("class", "cantidadProducto");
        cantidad1.setAttribute("id", id);
        const editor = document.createElement("div");
        editor.setAttribute("class", "divEditor");
        const edit = document.createElement("a");
        edit.setAttribute("class", "edit-button");
        const total = document.createElement("a");

        const formulario = document.createElement("form");

        formulario.setAttribute("class", "delet-button-form");
        formulario.setAttribute("action", "/car");

        const delet = document.createElement("button");
        delet.setAttribute("type", "submit");
        delet.setAttribute("class", "delet-button");

        name1.innerHTML = name;
        price1.innerHTML = price;
        price1.setAttribute("class", "price" + id);
        image1.setAttribute("src", "/images/products/" + image);
        image1.setAttribute("class", "imageCarrito");
        edit.innerHTML = "Edit";
        total.innerHTML = price * cantidad;
        total.setAttribute("class", "total" + id);
        total.setAttribute("id", "total");
        delet.innerHTML = "Delete";
        delet.setAttribute("id", id);

        const divImage = document.createElement("div");
        divImage.setAttribute("class", "divCarrito");
        const divName = document.createElement("div");
        divName.setAttribute("class", "divCarrito");

        container.appendChild(card);

        divImage.appendChild(image1);
        card.appendChild(divImage);

        divName.appendChild(name1);
        card.appendChild(divName);

        card.appendChild(price1);
        card.appendChild(espacio);
        card.appendChild(cantidad1);
        card.appendChild(total);
        formulario.appendChild(delet);
        editor.appendChild(formulario);
        card.appendChild(editor);

        acumulador = acumulador + price * cantidad;

        if (index == productosUnicos.length - 1) {
          const total = document.createElement("h1");
          total.setAttribute("class", "container");
          total.setAttribute("id", "sumaTotal");
          total.innerHTML = "TOTAL $" + acumulador;
          var divTotal = document.querySelector(".sumaTotal");
          var card2 = document.createElement("div");
          card2.setAttribute("class", "card");
          card2.appendChild(total);
          divTotal.appendChild(card2);
        }
      });
  });

  window.addEventListener("click", function (e) {
    if (e.target.classList.value == "delet-button") {
      const id = e.target.id;

      var productosEliminados = productosUnicos.filter(
        (productosUnicos) => productosUnicos.id != id
      );

      var productosEliminados1 = JSON.stringify(productosEliminados);
      productosEliminados1 = productosEliminados1.replace(/[[\]]/g, "");
      localStorage.setItem("datos", productosEliminados1);
    }

    if (e.target.classList.value == "cantidadProducto") {
      const id = e.target.id;
      var productos = document.querySelectorAll(".cantidadProducto");

      productos.forEach((producto) => {
        if (producto.attributes.id.value == id) {
          let precioProducto = this.document.querySelector(".price" + id);
          precioProducto = precioProducto.innerHTML;

          let precioReal = this.document.querySelector(".total" + id);
          precioReal.innerHTML = producto.value * precioProducto;


          ////////////////////////// AGREGAR VALORES EN VIVO EN TOTAL //////////////////////////
          let nuevaSuma = document.querySelectorAll("#total"); //guarda la informacion de los totales de cada producto
          let total = document.querySelector("#sumaTotal"); //guarda la informacion de total de todos los productos
          var nuevoTotal = 0;
          nuevaSuma.forEach((nuevaSumas, index) => {
            nuevoTotal = parseInt(nuevaSumas.innerHTML) + nuevoTotal;

            if (index == nuevaSuma.length - 1) {
              total.innerHTML = "TOTAL $" + nuevoTotal;
            }
            
          });



          ////////////////////// INGRESAR NUEVOS VALORES EN EL LOCALSTORAGE ////////////////////
          productosUnicos.forEach((productoUnico) => {
            if (productoUnico.id == id) {
              productoUnico.cantidad = producto.value;
            }
          });


        }
      });
      var nuevaListaProductos = JSON.stringify(productosUnicos);
      nuevaListaProductos = nuevaListaProductos.replace(/[[\]]/g, "");
      localStorage.setItem("datos", nuevaListaProductos);

    }
  });
});
