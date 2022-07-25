students=[
  {
    name:"Luana",
    n1:9.2,
    n2:8.4,
  },
  {
    name:"Judite",
    n1:7,
    n2:2,
  },
  {
    name:"Carla",
    n1:5.5,
    n2:9.7,
  },
  {
    name:"Leticia",
    n1:6,
    n2:10,
  },
  {
    name:"Luiz",
    n1:4.1,
    n2:3.2,
  },

]

function medias(nota1,nota2){

  let averange= (nota1+nota2)/2;

  return(averange)

}

function aprovação(averange,studentName){

  let situação = ""
  if (averange >= 7){

  situação= `Parabéns ${studentName}! você foi aprovada(o) no concurso! `
  }

  else{

  situação= `Que pena ${studentName}! tente novamente ano que vem!`
    
  }

  return(situação)
}

function mensage(student){

  return(`A média do aluno(a) ${student.name} é ${medias(student.n1,student.n2)}
  ${aprovação(medias(student.n1,student.n2),student.name)}`)
}

for (student of students){

  let situacaoDoAluno= mensage(student)
  
  alert(situacaoDoAluno)
}

