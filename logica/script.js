const btContinuar = document.querySelector(".btnContinuar");
const tituloSc = document.querySelector(".titulo");
const parrafoSc = document.querySelector(".parrafo");
const parrafoTwo = document.querySelector(".parrafoTwo");
const parrafoThree = document.querySelector(".parrafoThree");
const parrafoFour = document.querySelector(".parrafoFour");
const parrafoFive = document.querySelector(".parrafoFive");

btContinuar.classList.add("btnContinuarOne");

const btContinuarOne = document.querySelector(".btnContinuarOne");

btContinuarOne.addEventListener("click", pasarPantallaUno);

function pasarPantallaUno() {
  tituloSc.remove();
  parrafoSc.remove();
  parrafoTwo.classList.remove("inactive");
  btContinuar.classList.remove("btnContinuarOne");
  btContinuar.setAttribute("id", "btnContinuarTwo");
  const btContinuarTwo = document.getElementById("btnContinuarTwo");

  if (document.querySelector(".parrafoTwo")) {
    btContinuarTwo.addEventListener("click", pasarPantallaTwo);

    function pasarPantallaTwo() {
      parrafoTwo.remove();
      tituloSc.remove();
      parrafoSc.remove();
      parrafoThree.classList.remove("inactive");

      btContinuar.setAttribute("id", "btnContinuarThree");
      const btContinuarThree = document.getElementById("btnContinuarThree");

      if (document.querySelector(".parrafoThree")) {
        btContinuarThree.addEventListener("click", pasarPantallaThree);

        function pasarPantallaThree() {
          parrafoThree.remove();
          parrafoFour.classList.remove("inactive");

          btContinuar.setAttribute("id", "btnContinuarFour");
          const btContinuarFour = document.getElementById("btnContinuarFour");
          if (document.querySelector(".parrafoFour")) {
            btContinuarFour.addEventListener("click", pasarPantallaFour);
            function pasarPantallaFour() {
              parrafoFour.remove();
              parrafoFive.classList.remove("inactive");

              btContinuar.setAttribute("class", "btnCambiar");
              const btCambiar = document.querySelector(".btnCambiar");

              btContinuar.addEventListener("click", cambiarPagina);

              function cambiarPagina(){
                window.location.href ="../Principal.html";
              }
            }
          }
        }
      }
    }
  }
}
