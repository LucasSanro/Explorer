/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacients=[

  { 
    name:"Luiz",
    age: 20,
    weight: 90,
    height: 100,

  },
  { 
    name:"Judite",
    age: 22,
    weight: 70,
    height: 87,

  },
  { 
    name:"Carla",
    age: 28,
    weight: 90,
    height: 60,

  },
  { 
    name:"Rafael",
    age: 29,
    weight: 87,
    height: 95,

  }

]

let pacientsName = []
let pacientsAge = []
let pacientsPeso = []
let pacientsAltura = []

for (let pacient of pacients){
  pacientsName.push(pacient.name)
  pacientsAge.push(pacient.age)
  pacientsPeso.push(pacient.weight)
  pacientsAltura.push(pacient.height)
}

for(let index = 0; index< pacients.length; index++){

  alert(`O paciente ${pacientsName[index]} tem  ${pacientsAge[index]} anos, pesa ${pacientsPeso[index]}kg e tem aproximadamente ${pacientsAltura[index]}cm de altura`)

}

alert("Fim da Execução")


