let closeBar = document.getElementById('closeBar');
let containerColorChanger = document.getElementById('containerColorChanger');

let operador = document.getElementById('operador');

let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');

let resultado = document.getElementById('resultado');

let openClose01 = document.getElementById('openClose01');
let openClose02 = document.getElementById('openClose02');
let openClose03 = document.getElementById('openClose03');
let openClose04 = document.getElementById('openClose04');
let openClose05 = document.getElementById('openClose05');
let openClose06 = document.getElementById('openClose06');
let openClose07 = document.getElementById('openClose07');

let contentBar01 = document.getElementById('contentBar01');
let contentBar02 = document.getElementById('contentBar02');
let contentBar03 = document.getElementById('contentBar03');
let contentBar04 = document.getElementById('contentBar04');
let contentBar05 = document.getElementById('contentBar05');
let contentBar06 = document.getElementById('contentBar06');
let contentBar07 = document.getElementById('contentBar07');

let openCloseCheck = [
  openCloseCont01 = true,
  openCloseCont02 = true,
  openCloseCont03 = true,
  openCloseCont04 = true,
  openCloseCont05 = true,
  openCloseCont06 = true,
  openCloseCont07 = true,
];

openClose01.onclick = () => {
  if(openCloseCheck[0] == true) {
    openClose01.style.transform = "rotate(180deg)";
    contentBar01.style.height = "120px";
    contentBar01.style.left = "0px";
    contentBar01.style.opacity = "1";
    openCloseCheck[0] = false;
    return;
  }
  openClose01.style.transform = "rotate(0deg)";
  contentBar01.style.height = "0";
  contentBar01.style.left = "-260px";
  contentBar01.style.opacity = "0";
  openCloseCheck[0] = true;
}
openClose02.onclick = () => {
  if(openCloseCheck[1] == true) {
    openClose02.style.transform = "rotate(180deg)";
    contentBar02.style.height = "120px";
    contentBar02.style.left = "0px";
    contentBar02.style.opacity = "1";
    openCloseCheck[1] = false;
    return;
  }
  openClose02.style.transform = "rotate(0deg)";
  contentBar02.style.height = "0";
  contentBar02.style.left = "-260px";
  contentBar02.style.opacity = "0";
  openCloseCheck[1] = true;
}
openClose03.onclick = () => {
  if(openCloseCheck[2] == true) {
    openClose03.style.transform = "rotate(180deg)";
    contentBar03.style.height = "120px";
    contentBar03.style.left = "0px";
    contentBar03.style.opacity = "1";
    openCloseCheck[2] = false;
    return;
  }
  openClose03.style.transform = "rotate(0deg)";
  contentBar03.style.height = "0";
  contentBar03.style.left = "-260px";
  contentBar03.style.opacity = "0";
  openCloseCheck[2] = true;
}
openClose04.onclick = () => {
  if(openCloseCheck[3] == true) {
    openClose04.style.transform = "rotate(180deg)";
    contentBar04.style.height = "120px";
    contentBar04.style.left = "0px";
    contentBar04.style.opacity = "1";
    openCloseCheck[3] = false;
    return;
  }
  openClose04.style.transform = "rotate(0deg)";
  contentBar04.style.height = "0";
  contentBar04.style.left = "-260px";
  contentBar04.style.opacity = "0";
  openCloseCheck[3] = true;
}
openClose05.onclick = () => {
  if(openCloseCheck[4] == true) {
    openClose05.style.transform = "rotate(180deg)";
    contentBar05.style.height = "120px";
    contentBar05.style.left = "0px";
    contentBar05.style.opacity = "1";
    openCloseCheck[4] = false;
    return;
  }
  openClose05.style.transform = "rotate(0deg)";
  contentBar05.style.height = "0";
  contentBar05.style.left = "-260px";
  contentBar05.style.opacity = "0";
  openCloseCheck[4] = true;
}
openClose06.onclick = () => {
  if(openCloseCheck[5] == true) {
    openClose06.style.transform = "rotate(180deg)";
    contentBar06.style.height = "120px";
    contentBar06.style.left = "0px";
    contentBar06.style.opacity = "1";
    openCloseCheck[5] = false;
    return;
  }
  openClose06.style.transform = "rotate(0deg)";
  contentBar06.style.height = "0";
  contentBar06.style.left = "-260px";
  contentBar06.style.opacity = "0";
  openCloseCheck[5] = true;
}
openClose07.onclick = () => {
  if(openCloseCheck[6] == true) {
    openClose07.style.transform = "rotate(180deg)";
    contentBar07.style.height = "120px";
    contentBar07.style.left = "0px";
    contentBar07.style.opacity = "1";
    openCloseCheck[6] = false;
    return;
  }
  openClose07.style.transform = "rotate(0deg)";
  contentBar07.style.height = "0";
  contentBar07.style.left = "-260px";
  contentBar07.style.opacity = "0";
  openCloseCheck[6] = true;
}

let checkBar = false;

let invalidChars = [
  "-",
  "+",
  "e",
];

function checkChars(e) {
  if(invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

numero1.onkeydown = (e) => {
  checkChars(e);
}
numero2.onkeydown = (e) => {
  checkChars(e);
}

closeBar.onclick = () => {
  if(checkBar == false) {
    containerColorChanger.style.width = "260px";
    containerColorChanger.style.minWidth = "260px";
    containerColorChanger.style.left = "0";
    containerColorChanger.style.opacity = "1";
    containerColorChanger.style.borderRight = "2px solid var(--corSecundaria)";
    closeBar.innerHTML = '<i class="fa-solid fa-arrow-right-arrow-left"></i> FECHAR';
    checkBar = true;
    return;
  }
  containerColorChanger.style.width = "0";
  containerColorChanger.style.minWidth = "0";
  containerColorChanger.style.left = "-260px";
  containerColorChanger.style.opacity = "0";
  containerColorChanger.style.borderRight = "0px solid transparent";
  closeBar.innerHTML = '<i class="fa-solid fa-arrow-right-arrow-left"></i> ABRIR';
  checkBar = false;
}

function calculate(e) {
  e.preventDefault();

  let valOperador = operador.value;

  let num1 = parseFloat(numero1.value);
  let num2 = parseFloat(numero2.value);

  if(num1 == "" || Number.isNaN(num1) == true) {
    numero1.value = "0";
    num1 = 0;
  }
  if(num2 == "" || Number.isNaN(num2) == true) {
    numero2.value = "0";
    num2 = 0;
  }

  if(valOperador == 0) {
    resultado.value = "Selecione uma Operação!";
  }else if(valOperador == 1) {
    resultado.value = (num1 + num2).toFixed(2);
  }else if(valOperador == 2) {
    resultado.value = (num1 - num2).toFixed(2);
  }else if(valOperador == 3) {
    resultado.value = (num1 * num2).toFixed(2);
  }else {
    if(num1 == 0 && num2 == 0) {
      resultado.value = "Não é possível dividir 0 por 0!";
      return;
    }
    resultado.value = (num1 / num2).toFixed(2);
  }
}