// PRIMER INTENTO DE MODO OSCURO

// const btnLight = document.getElementById('button-modo-dark')
// btnLight.addEventListener('click', () =>{
//     document.body.classList.toggle('.dark-dark');
//     btnLight.classList.toggle('.modo-light')
// })

// DALE KRIS!! VOS PODES CON ESTO! SOS INTELIGENTE, SOS CAPAZ Y TE LO MERECES PARA SEGUIR AVANZANDO Y CRECIENDO. FALTA CADA VEZ MENOS PARA EL FUTURO QUE ESTAS ESPERANDO FELIZ

//INTENTO PARTE INPUT TEXTO CAJA MEME////

// const actualizarTextos = () => {
//     $('top-text').innerText = $('top-text').value;
//   }
// const inicializarTexto = () => {
//     $('top-text').addEventListener('input', actualizarTextos)
// }
const input = document.getElementById('input')
const supText = document.getElementById('textoTop'); 
// const infTExt = document.getElementById('textoInf');

input.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    supText.innerHTML = textoIngresado;
})

// input.addEventListener('input', (event) => {
//     const textoIngresado2 = event.target.value;
//     textoInf.innerHTML = textoIngresado2;
// })