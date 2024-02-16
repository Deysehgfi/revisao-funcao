const palavras=["sol", "livro" ,"lua", "cadeira ", "mesa", "mar"]
// const maiorQue3 = palavras.filter((elemento)=>{ //pega todos os numeros maiores que 3
//     return elemento.length > 3 //length tamanho do array
//   })
//   console.log(maiorQue3)


const maiorQue3 = palavras.filter((palavras)=>{
    if(palavras.length>3){
        return palavras
    }
})
console.log(maiorQue3)