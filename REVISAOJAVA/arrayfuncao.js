const array =[ 21,6,84,24,86,11,39,59,96,53]
// const array1 =[ 21,6,84,24,86,11,39,59,96,53]
// //listar
// //metodo 1
//  array.forEach((elemento, indice)=>{
//     console.log(`${indice}-${elemento}`)
//  })

//  //metodo 2
//  const listarDados= (elemento) => console.log(elemento)
//  array.forEach(listarDados)
//  array1.forEach(listarDados)



//  //método MAP
//  array.map((elemento)=>{
//     console.log(elemento*3) // todos os elementos do  array mltiplicado por 3 
//  })
//  const listarMap = elemento => console.log(elemento)
//  array1.map(listarMap)

//funcao amonima
//metodo 1
  const maiorQue30 =array.find((elemento)=>{ //qnd encontra o primeiro numero maior que 30 ele para 
    return elemento > 30 
  })
  console.log(maiorQue30)

  //metodo 2


  const maiorQue31 =array.filter((elemento)=>{ //pega todos os numeros maiores que 31
    return elemento > 31 
  })
  console.log(maiorQue31)



