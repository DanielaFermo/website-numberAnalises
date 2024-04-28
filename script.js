let numberToAdd = document.getElementById("numberToAdd");
let information = document.getElementById("information");
let result = document.getElementById("result");
let value = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(numberToAdd.value) && !inList(numberToAdd.value, value)) {
    value.push(Number(numberToAdd.value));
    let item = document.createElement(`option`);
    item.text = `The value added was ${numberToAdd.value}`;
    information.appendChild(item);
    result.innerHTML = ``;
  } else {
    window.alert(`The number is not valid or its alredy selected`);
  }
  numberToAdd.value = ``;
  numberToAdd.focus();
}

function analise() {
  if (value.length == 0) {
    window.alert(`Make sure to add a value first`);
  } else {
    let total = value.length;
    let maior = value[0];
    let menor = value[0];
    let soma = 0;
    let media = 0;
    for (let pos in value) {
      soma += value[pos];
      if (value[pos] > maior) maior = value[pos];
      if (value[pos] < menor) menor = value[pos];
    }
    media = soma / total;
    result.innerHTML = ``;
    result.innerHTML += `<p> The total of registerded number is ${total}</p>`;
    result.innerHTML += `<p>The biggest value is ${maior}.</p>`;
    result.innerHTML += `<p>The smallest value is ${menor}.</p>`;
    result.innerHTML += `<p>Adding all the values we get ${soma}.</p>`;
    result.innerHTML += `<p>The smallest value is ${media}.</p>`;
  }
}

/* 
function add() {
  let numberAdd = Number(numberToAdd.value)
  information.innerHTML=``
    if(numberAdd <= 100 && numberAdd >= 0){
    let addItem = document.createElement(`option`)
    addItem.text=`The value add was ${numberAdd}`
    information.appendChild(addItem)
    value.push(numberAdd)
}else {
    window.alert(`Number needs to be between 0 to 100`);
}
}


console.log(value); */
