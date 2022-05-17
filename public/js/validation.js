window.onload = function () {
  let username1 = document.querySelector("#username1");
  let pass1 = document.querySelector("#pass1");
  let username2 = document.querySelector("#username2");
  let email2 = document.querySelector("#email2");
  let pass21 = document.querySelector("#pass21");
  let pass22 = document.querySelector("#pass22");
  let login = document.querySelector("#login");
  let register = document.querySelector("#register");

  function borrar() {
    let listaDeErrores = document.querySelector(".ListaErrores");
    // listaDeErrores.forEach((errores) => (errores.innerHTML = ""));
    listaDeErrores.innerHTML = "";
  }

  login.addEventListener("submit", function (e) {
    //eliminar los errores antes mostrados
    let error2 = document.querySelector(".errores");
    error2.innerHTML = "";

    //validar errores
    let error = [];
    if (username1.value == "") {
      error.push("The name cannot be empty");
      username1.classList.add("is-invalid");
    } else {
    }

    if (pass1.value == "") {
      error.push("The password cannot be empty");
      pass1.classList.add("is-invalid");
    } else {
    }

    if (error.length > 0) {
      borrar();
      e.preventDefault();
      let error2 = document.querySelector(".errores");
      console.log(error2);
      for (let i = 0; i < error.length; i++) {
        error2.innerHTML += "<li>" + error[i] + "</li>";
      }
    }
  });

  register.addEventListener("submit", function (e) {
    //eliminar los errores antes mostrados
    let error2 = document.querySelector(".errores");
    error2.innerHTML = "";

    //validar errores
    let error = [];
    if (username2.value == "") {
      error.push("The name cannot be empty");
      username2.classList.add("is-invalid");
    } else {
    }

    if (pass21.value == "") {
      error.push("The password cannot be empty");
      pass1.classList.add("is-invalid");
    } else {
    }

    if (pass21.value != pass22.value) {
      error.push("Passwords are not the same");
      pass1.classList.add("is-invalid");
    } else {
    }

    if (email2.value == "") {
      error.push("The email cannot be empty");
      pass1.classList.add("is-invalid");
    } else {
    }

    if (error.length > 0) {
      borrar();
      e.preventDefault();
      let error2 = document.querySelector(".errores");
      console.log(error2);
      for (let i = 0; i < error.length; i++) {
        error2.innerHTML += "<li>" + error[i] + "</li>";
      }
    }
  });
};
