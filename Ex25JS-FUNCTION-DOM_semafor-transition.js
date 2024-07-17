let accioParar = document.getElementById("parar")

let accioReduir = document.getElementById("reduir")

let accioArrencar = document.getElementById("arrencar")

 function redLight() {
    toNegro();
    document.getElementById("vermell").style.backgroundColor = "rgb(255, 0, 0)";
  }

  function yellowLight() {
    toNegro();
    document.getElementById("groc").style.backgroundColor = "rgb(255, 217, 0)";
  }

  function greenLight() {
    toNegro();
    document.getElementById("verd").style.backgroundColor = "rgb(21, 255, 0)";
  }

  function toNegro() {
    // document.getElementById(("vermell")&&("groc")&&("verd")).style.backgroundColor = "black";
    document.getElementById("vermell").style.backgroundColor = "black";
    document.getElementById("groc").style.backgroundColor = "black";
    document.getElementById("verd").style.backgroundColor = "black";
  }
  accioParar.addEventListener("click", redLight)
  accioReduir.addEventListener("click", yellowLight)
  accioArrencar.addEventListener("click", greenLight)
    