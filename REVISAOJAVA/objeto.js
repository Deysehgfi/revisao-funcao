let meuObjeto 

let pessoa ={
    nome: 'Deyse',
    idade:17,
    altura:1.60,
    endereco:[
        {tipo:'residencial',
        rua:'Rua A',
        cidade:'Maceio'},

        {tipo:'residencial',
        rua:'Rua B',
        cidade:'salvador '}
    ],
    saudacao(){
        return `ola, mundo`
    }
}
console.log(pessoa.nome)
console.log(pessoa.saudacao())
// console.log(pessoa.endereco[0],pessoa.endereco[1])




//listar todos os endereços desse obj

pessoa.endereco.forEach((elemento,indice)=>{
    console.log(`${indice +1} - ${elemento.cidade}`)
})