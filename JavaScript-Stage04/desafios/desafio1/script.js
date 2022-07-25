let firstValue= prompt("Por favor digite o primeiro valor: ");

let secondValue= prompt("Por favor digite o Segundo valor: ");


/* FUNÇOES*/
function soma(firstValue,secondValue){

  let soma = Number(firstValue) + Number(secondValue);

  return(soma)
}

function subtracao(firstValue,secondValue){

  let subtracao = Number(firstValue)-Number(secondValue);

  return(subtracao)

}

function multiplicacao(firstValue,secondValue){

  let multiplicacao = Number(firstValue)*Number(secondValue);

  return(multiplicacao)

}

function divisao(firstValue,secondValue){

  let divisao = Number(firstValue)/ Number(secondValue);

  return(divisao)
}

function resto(firstValue,secondValue){

  let resto= firstValue%secondValue

  return(resto)

}

// CHAMADA DE FUNÇOES

let somaFim = soma(firstValue,secondValue);

let subtracaoFim = subtracao(firstValue,secondValue);

let multiplicacaoFim = multiplicacao(firstValue,secondValue);

let divisaoFim = divisao(firstValue,secondValue);

let restoFim= resto(firstValue,secondValue);


//ALERTAS

alert(`A soma dos valores é : ${somaFim}`);

alert(`A subtração dos valores é : ${subtracaoFim}`);

alert(`A multiplicação dos valores é : ${multiplicacaoFim}`);

alert(`A divisão dos valores é : ${divisaoFim.toFixed(3)}`);

alert(`O restante da divisão é : ${restoFim}`)

// CONDIÇOES FINAIS
if (somaFim % 2 == 0 ) {

  alert( "A soma dos valores é PAR")

} else {

  alert( "A soma dos valores é IMPAR")
}

if (firstValue==secondValue) {

  alert("Os valores são iguais")
  
} else {
  alert("Os valores são diferentes")
}
