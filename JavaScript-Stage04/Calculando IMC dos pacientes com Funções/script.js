/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const pacients=[

  { 
    name:"Luiz",
    age: 20,
    weight: 100,
    height: 190,

  },
  { 
    name:"Judite",
    age: 22,
    weight: 70,
    height: 170,

  },
  { 
    name:"Carla",
    age: 28,
    weight: 90,
    height: 180,

  },
  { 
    name:"Rafael",
    age: 29,
    weight: 87,
    height: 95,

  }

]

function IMC(weight,height){

  let IMC =weight/((height /100) ** 2)
  return(IMC)
}




function imcMensage(pacient){

  return(`O paciente ${pacient.name} possui um IMC de ${IMC(pacient.weight,pacient.height).toFixed(2)} kg/m²`)

}

for(pacient of pacients){

  let imcMensageFunction = imcMensage(pacient)
  alert(imcMensageFunction) 
}