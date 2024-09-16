/* Paleta de Cores */
let color01 = document.getElementById('color01');
let color02 = document.getElementById('color02');
let color03 = document.getElementById('color03');
let color04 = document.getElementById('color04');
let color05 = document.getElementById('color05');
let color06 = document.getElementById('color06');
let color07 = document.getElementById('color07');

/* Códigos da Cores do Input */
let cor01 = document.getElementById('cor01');
let cor02 = document.getElementById('cor02');
let cor03 = document.getElementById('cor03');
let cor04 = document.getElementById('cor04');
let cor05 = document.getElementById('cor05');
let cor06 = document.getElementById('cor06');
let cor07 = document.getElementById('cor07');

/* ComputedStyle */
let gCompS = getComputedStyle(document.documentElement);

/* Cores pegas no :root do CSS */
let corPrimaria = gCompS.getPropertyValue('--corPrimaria').trim(' ');
let corPrimariaSombra = gCompS.getPropertyValue('--corPrimariaSombra').trim(' ');
let corSecundaria = gCompS.getPropertyValue('--corSecundaria').trim(' ');
let corSecundariaSombra = gCompS.getPropertyValue('--corSecundariaSombra').trim(' ');
let corFocus = gCompS.getPropertyValue('--corFocus').trim(' ');
let corTexto = gCompS.getPropertyValue('--corTexto').trim(' ');
let corTextoEscuro = gCompS.getPropertyValue('--corTextoEscuro').trim(' ');

/* Mudar valores pegos no :root do CSS */
let setDocument = document.documentElement.style;

function onStart() {
  cor01.value = corPrimaria.toUpperCase();
  cor02.value = corPrimariaSombra.toUpperCase();
  cor03.value = corSecundaria.toUpperCase();
  cor04.value = corSecundariaSombra.toUpperCase();
  cor05.value = corFocus.toUpperCase();
  cor06.value = corTexto.toUpperCase();
  cor07.value = corTextoEscuro.toUpperCase();

  color01.value = corPrimaria;
  color02.value = corPrimariaSombra;
  color03.value = corSecundaria;
  color04.value = corSecundariaSombra;
  color05.value = corFocus;
  color06.value = corTexto;
  color07.value = corTextoEscuro;
}

/* Verificar e muda cor em tempo real */
function verifyColor() {
  setDocument.setProperty('--corPrimaria', color01.value);
  setDocument.setProperty('--corPrimariaSombra', color02.value);
  setDocument.setProperty('--corSecundaria', color03.value);
  setDocument.setProperty('--corSecundariaSombra', color04.value);
  setDocument.setProperty('--corFocus', color05.value);
  setDocument.setProperty('--corTexto', color06.value);
  setDocument.setProperty('--corTextoEscuro', color07.value);

  cor01.value = color01.value.toUpperCase();
  cor02.value = color02.value.toUpperCase();
  cor03.value = color03.value.toUpperCase();
  cor04.value = color04.value.toUpperCase();
  cor05.value = color05.value.toUpperCase();
  cor06.value = color06.value.toUpperCase();
  cor07.value = color07.value.toUpperCase();
}

/* Muda o valor da variável no CSS */
let updateColor01;
let updateColor02;
let updateColor03;
let updateColor04;
let updateColor05;
let updateColor06;
let updateColor07;

if(color01.onclick = () => {
  updateColor01 = setInterval(verifyColor, 50);
});
if(color01.onchange = () => {
  clearInterval(updateColor01);
})

if(color02.onclick = () => {
  updateColor02 = setInterval(verifyColor, 50);
});
if(color02.onchange = () => {
  clearInterval(updateColor02);
})

if(color03.onclick = () => {
  updateColor03 = setInterval(verifyColor, 50);
});
if(color03.onchange = () => {
  clearInterval(updateColor03);
})

if(color04.onclick = () => {
  updateColor04 = setInterval(verifyColor, 50);
});
if(color04.onchange = () => {
  clearInterval(updateColor04);
})

if(color05.onclick = () => {
  updateColor05 = setInterval(verifyColor, 50);
});
if(color05.onchange = () => {
  clearInterval(updateColor05);
})

if(color06.onclick = () => {
  updateColor06 = setInterval(verifyColor, 50);
});
if(color06.onchange = () => {
  clearInterval(updateColor06);
})

if(color07.onclick = () => {
  updateColor07 = setInterval(verifyColor, 50);
});
if(color07.onchange = () => {
  clearInterval(updateColor07);
})

onStart();