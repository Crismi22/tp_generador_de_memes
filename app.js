// PRIMER INTENTO DE MODO OSCURO

// const btnLight = document.getElementById('button-modo-dark')
// btnLight.addEventListener('click', () =>{
//     document.body.classList.toggle('.dark-dark');
//     btnLight.classList.toggle('.modo-light')
// })

// *********************************
// CAMBIO DE COLUMNA IMAGEN A COLUMNA TEXTO CON BOTONES NAV 
// *********************

const btnImg = document.getElementById('button-text-img');
const btnText = document.getElementById('button-text-text');

const panelImagen = document.getElementById('panel-imagen');
const panelTexto = document.getElementById('panel-texto');

btnImg.addEventListener('click', () => {
    panelImagen.style.display = "block";
    panelTexto.style.display = "none";
})

btnText.addEventListener('click',() => {
    panelTexto.style.display = "block";
    panelImagen.style.display = "none";
})


// DALE KRIS!! VOS PODES CON ESTO! SOS INTELIGENTE, SOS CAPAZ Y TE LO MERECES PARA SEGUIR AVANZANDO Y CRECIENDO. FALTA CADA VEZ MENOS PARA EL FUTURO QUE ESTAS ESPERANDO FELIZ
// **************************************
//+++++PARTE INPUT TEXTO CAJA MEME | CHECKBOX CAJA MEME////
// **************************************
const inputTop = document.getElementById('inputTop');
const inputBut = document.getElementById('inputBut');
const textoTop = document.getElementById('textoTop'); 
const textoInf = document.getElementById('textoInf');

const check1 = document.getElementById('not-top');
const check2 = document.getElementById('not-button');

// const check3 = document.getElementById('sin-fondo');

inputTop.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    textoTop.innerHTML = textoIngresado;
})
inputBut.addEventListener('input', (event) => {
    const textoIngresado2 = event.target.value;
    textoInf.innerHTML = textoIngresado2;
})


check1.addEventListener('click', () => {
    textoTop.classList.toggle('ocultar');
}) 
check2.addEventListener('click', () => {
    textoInf.classList.toggle('ocultar');
})