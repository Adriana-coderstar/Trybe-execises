// criar uma array 
 let brazilianState = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

// Função para atribuir os estados ao select
function selectState() {
 for (let index = 0; index < brazilianState.length; index += 1) {
  let option = document.createElement('option');

  option.value = brazilianState;
  option.innerHTML = brazilianState[index];
  let select = document.querySelector('#estado');
  select.appendChild(option);
  }
}
selectState()


function enviarDados(event){
// criar função que adiciona o evento para o botão
  event.preventDefault();

  let date = document.querySelector('#date').value;
  
  let day = parseInt(date.substring(0, 1)) || "";
  let month = parseInt(date.substring(3, 5)) || "";
  let year = parseInt(date.substring(6, 10)) || "";

  if(typeof(day) !== 'number' && typeof(month) !== 'number' && typeof(year) !== 'number'){
    alert("A data deve conter números!");
  }if(day < 0 || day > 31){
    alert ("Dia invalido")
  }  if(month < 0 || day > 12){
    alert ("Mês invalido")
  }  if(year < 0){
    alert ("Ano invalido")
  }
}


function validarDados(){ //validar dados
let name = document.querySelector('[name=name]');

// verificar maxLength e Require
if(name.value.length > 40 || name.value.length ===0){
  alert('Nome inválido')
}else{
  alert('Nome válido')
}
}

function buttonClear(button) {
  button.addEventListener('click', buttonSubmit)
}

function buttonSubmit(event){
  event.preventDefault();
}

window.onload = function(event){
const button = document.querySelector('.submit-button');

selectState(); //função da lista dos estados
enviarDados();
}

