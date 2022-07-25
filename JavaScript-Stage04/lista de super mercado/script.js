/*capturar 10 itens para compor a lista de um supermercado.

após isso imprimir os itens separando os por virgulas
*/

let list=[];

for(let item =0; item <10; item++){

  let listAppend=prompt("Digite o item " +(item+1))
  
  list[item]=listAppend

}

alert(list)