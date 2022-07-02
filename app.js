// PRIMER INTENTO DE MODO OSCURO

// const btnLight = document.getElementById('button-modo-dark')
// btnLight.addEventListener('click', () =>{
//     document.body.classList.toggle('.dark-dark');
//     btnLight.classList.toggle('.modo-light')
// })

const btnImg = document.getElementById('button-text-img');
const btnText = document.getElementById('button-text-text');

const panelImagen = document.getElementById('panel-imagen');
const panelTexto = document.getElementById('panel-texto');



// DALE KRIS!! VOS PODES CON ESTO! SOS INTELIGENTE, SOS CAPAZ Y TE LO MERECES PARA SEGUIR AVANZANDO Y CRECIENDO. FALTA CADA VEZ MENOS PARA EL FUTURO QUE ESTAS ESPERANDO FELIZ

//PARTE INPUT TEXTO CAJA MEME////

const inputTop = document.getElementById('inputTop')
const supText = document.getElementById('textoTop'); 
const infText = document.getElementById('textoInf');
const inputB = document.getElementById('inputB')


inputTop.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    supText.innerHTML = textoIngresado;
})

inputB.addEventListener('input', (event) => {
    const textoIngresado2 = event.target.value;
    infText.innerHTML = textoIngresado2;
})