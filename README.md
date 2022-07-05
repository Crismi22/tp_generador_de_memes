## no olvidar agregar representacion grafica de pseudocodigo.
<br>
si es posible algun meme hecho con la pagina o bien una captura pequeña de la pagina

https://i.pinimg.com/originals/89/ca/30/89ca30b76dfaed261b637b2f5fbc0660.jpg"


const fondoTransCheck = document.getElementById("fondoTransCheck");

fondoTransCheck.addEventListener("click", () => {
  if (fondoTransCheck.checked) {
    textoFondoTM.classList.add("fondoTrans");
    textoFondoBM.classList.add("fondoTrans");
  } else {
    textoFondoTM.classList.remove("fondoTrans");
    textoFondoBM.classList.remove("fondoTrans");
  }
  // textoFondoTM.classList.toggle("fondoTrans");
  //textoFondoBM.classList.toggle("fondoTrans");
});