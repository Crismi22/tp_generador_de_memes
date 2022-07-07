// ********************************************
//                 MODO OSCURO        
// ********************************************

const light = document.getElementById('button-modo-dark');
const body = document.body;

const valor = localStorage.getItem("light")

light.addEventListener('click',()=> {
    const val = body.classList.toggle("modo-light")
    localStorage.setItem('light',val)
})

// *****funcion para que al actualizar página siga con el modo elegido por el usuario*******
if (valor == "true") {
    body.classList.add("modo-light")
} else {
    body.classList.remove("modo-light")
}

// ********************************************************
// CAMBIO DE COLUMNA IMAGEN A COLUMNA TEXTO CON BOTONES NAV 
// ********************************************************
// const panel = document.getElementById('panel');
// const btnPanelCierre = document.getElementById('panel-close-button');
// revisar btn funcion para cerrar panel desde responsive
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



// btnPanelCierre.addEventListener('click', () =>{
//     panelImagen.classList.toggle('ocultar');
//     panelTexto.classList.toggle('ocultar');
// })


// **********************************
//         URL INPUT
// **********************************

const urlImg = document.getElementById('url-img');
urlImg.addEventListener('input', () => {
  imagen.style = `background-image: url(${urlImg.value})`;
});


// *******************************************************
//+++++PANEL DE FILTROS EN LA IMAGEN////
// *******************************************************
const imagen = document.getElementById('caja-imagen');
const brillo = document.getElementById('brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const gray = document.getElementById('gray-scale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturacion = document.getElementById('saturacion');
const negativo = document.getElementById('negativo');

const filtros = () => {
     imagen.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${gray.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturacion.value}%) invert(${negativo.value})`;
}

 brillo.addEventListener('click', filtros); 
 opacidad.addEventListener('click', filtros);
 contraste.addEventListener('click', filtros);
 desenfoque.addEventListener('click',filtros);
 gray.addEventListener('click', filtros);
 sepia.addEventListener('click', filtros);
 hue.addEventListener('click', filtros);
 saturacion.addEventListener('click', filtros);
 negativo.addEventListener('click', filtros);

/***************BOTON RESTABLECER FILTROS**************/
const restablecer = (e) => {
    e.preventDefault()
    imagen.style.filter = `brightness(1) opacity(1)`;
    imagen.style.filter = `contrast(100)`;
    imagen.style.filter = `blur(0)`;
    imagen.style.filter = `grayscale(0)`;
    imagen.style.filter = `sepia(0)`;
    imagen.style.filter = `saturate(0)`;
    imagen.style.filter = `saturate(100)`;
    imagen.style.filter = `invert(0)`;
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    gray.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturacion.value = 100;
    negativo.value = 0;
};

const btnRestablecer = document.getElementById('btnRestablecer');
btnRestablecer.addEventListener('click',(e) =>{restablecer(e)});
/*****************************************************************/








// *******************************************************
//+++++PARTE INPUT TEXTO CAJA MEME | CHECKBOX CAJA MEME////
// *******************************************************

const inputTop = document.getElementById('inputTop');
const inputBut = document.getElementById('inputBut');
const textoTop = document.getElementById('textoTop'); 
const textoInf = document.getElementById('textoInf');
const cajaMeme = document.getElementById('caja-imagen');

const check1 = document.getElementById('not-top');
const check2 = document.getElementById('not-button');
const check3 = document.getElementById('sin-fondo');

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

// no cumple la funcion deseada - corregir
check3.addEventListener('click', () => {
    cajaMeme.classList.toggle('transparente');
})


// DALE KRIS!! VOS PODES CON ESTO! SOS INTELIGENTE, SOS CAPAZ Y TE LO MERECES PARA SEGUIR AVANZANDO Y CRECIENDO. FALTA CADA VEZ MENOS PARA EL FUTURO QUE ESTAS ESPERANDO FELIZ

// *******************************************************************
// CAMBIO TIPO DE FUENTE
// *******************************************************************

const cambioFuente = function (font) {
    document.getElementById('textoTop').style.fontFamily = font.value;
    document.getElementById('textoInf').style.fontFamily = font.value;
}

// *******************************************************************
// TAMAÑO DE FUENTE
// *******************************************************************

const textSize = document.getElementById('text-size-input');

textSize.addEventListener('input', (event) => {
    const NumberFont = event.target.value;
    textoTop.style.fontSize = `${NumberFont}px`;
    textoInf.style.fontSize = `${NumberFont}px`;
})

// ******************************************************************
// ALINEACION DE TEXTO 
// *****************************************************************
// const btnAlignLeft = document.getElementById('btn-text-align-left');
// const btnAlignCenter = document.getElementById('btn-text-center-align');
// const btnAlignRight = document.getElementById('btn-text-right-align');

// btnAlignLeft.addEventListener('click', () => {
//     textoTop.style.textAlign = "left";
// })
// Left(){
//     const btnAlignLeft = document.getElementById('textoTop');
//         btnAlignLeft.style.textAlign = "left";
//     )}
// ******************************************************************
//                  BOTON DESCARGA MEME 
// *****************************************************************
const btnDescarga = document.getElementById('button-descarga');

btnDescarga.addEventListener('click', () =>
  domtoimage.toBlob(document.getElementById('caja-meme')).then(blob => saveAs(blob, 'mi-meme.png')));