window.addEventListener("load", function () {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  // localStorage.removeItem("datos"); //elimina informacion del localStorage datos
  let str = localStorage.getItem("datos"); // capturamos el local storage
  let productosCarrito = JSON.parse("[" + str + "]"); // convuerte el string json en un array de objetos
  var productosUnicos = productosCarrito.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  const productosUnicos1 = JSON.stringify(productosUnicos);
  console.log(productosUnicos1);
  const productosUnicos2 = productosUnicos1.replace(/[[\]]/g, "");

  localStorage.setItem("datos", productosUnicos2); //convierte el JSON en string para guardarlo en el locarStorage

  // console.log(productosUnicos);
  // localStorage.setItem("productosUnicos", productosUnicos);

  productosUnicos.forEach((productos, index) => {
    fetch(`http://localhost:3002/api/product/${productos.id}/`)
      .then(function (response) {
        return response.json();
      })
      .then(function (product) {
        console.log();
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
        const editor = document.createElement("div");
        editor.setAttribute("class", "divEditor");
        const edit = document.createElement("a");
        edit.setAttribute("class", "edit-button");
        const total = document.createElement("a");

        const formulario = document.createElement("form");
        // formulario.setAttribute("method", "POST");
        formulario.setAttribute("class", "delet-button-form");
        formulario.setAttribute("action", "/car");

        const delet = document.createElement("button");
        delet.setAttribute("type", "submit");
        delet.setAttribute("class", "delet-button");

        name1.innerHTML = name;
        price1.innerHTML = "price: $" + price;
        image1.setAttribute("src", "/images/products/" + image);
        image1.setAttribute("class", "imageCarrito");
        edit.innerHTML = "Edit";
        total.innerHTML = price * cantidad;
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
        // editor.appendChild(edit);
        formulario.appendChild(delet);
        editor.appendChild(formulario);
        card.appendChild(editor);
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
  });
});
