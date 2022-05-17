window.addEventListener("load", function () {
  let register = document.querySelector("#register");

  register.addEventListener("submit", function (e) {
    console.log("entra a alertRegister");
    e.preventDefault();
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  });
});
