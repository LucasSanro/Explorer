//comentario
/*
Resolva o problema:

pergunte o nome do usuario e escreva a mensagem "Olá [nome do usuario]"
*/
//Capturar informaçoes

// let nome = prompt("Qual seu nome?")
// alert("Olá, "+ nome)

// calculadora

// alert(" Vamos somar 2 valores ");

// let numberOne = prompt("Enter the first value: ");
// let numberTwo = prompt("Enter the second value:  ");

// let result= Number(numberOne)+Number(numberTwo);

// alert("O resultado é " +result )


// operaçoes matematicas

// alert("vamos fazer todas as operaçoes com 2 valores");

// let firstNumber = prompt("Enter the first value: ");
// let secondNumber= prompt("Enter the second value: ");

// firstNumber=Number(firstNumber);
// secondNumber=Number(secondNumber);

// const sum = firstNumber + secondNumber
// const sub = firstNumber - secondNumber
// const mul = firstNumber * secondNumber
// const div = firstNumber / secondNumber
// const restDiv = firstNumber % secondNumber

// alert("Soma " + sum)
// alert("Subtração " + sub)
// alert("Multiplicação " + mul)
// alert("DIvisão " + div)
// alert("Resto da divisão " + restDiv)

/*
solicitar o nome do aluno e as 3 notas do bimestr calcular a media do aluno.
a media possitiva deve ser maior que 6
se o aluno passou no bimestre dar os parabéns
se o aluno não passou no bimestre , motivar ele

em ambos os casos mostre a mensagem com o nome e com a nota */

alert("Vamos calcular a media do aluno com as 3 notas do bimestre")

let student= prompt(" Qual no nome do(a) aluno(a): " )
let n1 = prompt("Qual a nota da primeira prova: ")
let n2 = prompt("Qual a nota da segunda prova: ")
let n3 = prompt("Qual a nota da terceira prova: ")

let average = (Number(n1)+Number(n2)+Number(n3))/3

average=average.toFixed(2)

let result = average>6


if (result){

  alert("Parabéns "+ student + "! Sua media foi de: " + average)

}else{ 

  alert("melhor se dedicar mais "+ student + "! Sua media foi de: " + average + " Recomendamos aulas de reforço.")

}

