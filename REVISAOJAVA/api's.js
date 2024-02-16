// console.log('Este é o primeiro consolo')
// setTimeout(function(){
//     console.log('Este é o primeiro console')
// }, 3000)


// setTimeout(function(){
//     console.log('Este é o primeiro console')
// }, 2000)
// console.log('Este é o terceiro console')

//  const promessa = Promise.resolve(5+5)
//  console.log('Lógica que foi desenvolvida')
//  promessa.then(function(value){ // o then so é executado qnd a promessa for executada
//     console.log(`A soma ${value}`)
//     return value

//  }).then(function(value){
//  console.log(`A subtração -1 =${value - 1}`)
//  return value
//  }).then(function(value){
//     console.log(`Multiplicação -1 ${value*1}`)
//     return value
//  })
//  console.log('codigo Extra')

// Promise.resolve('ola,'*4) 
// .then((value)=> { 
//     if(Number.isNaN(value)){ 
//         throw new Error('value inválidos')
//     }
// }).catch((err)=>{ //tratar o erro com catch
//     console.log(`Um erro ocorreu ${err}`)
// })
//-------------------------------------------------------------------------------------------------------------------------------------------
// function checkNUmber(n){
//     return new Promise((reslve,reject)=>{
//         if(n>20){
//         resolve('O numero é maior que 20')

//         }else{
//             reject(new Error('Número Inválido'))}

//     })
// }
// const num1 = checkNUmber(25)
// const num2 = checkNUmber(10)

// num1.then((value)=>{
//     console.log(`o resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })



// num2.then((value)=>{
//     console.log(`o resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })
// console.log(`Teste Asym`)

//---------------------------------------------------------------------------------------------------------------
//async await
async function calculaComDelay(x,y){ //funcao vira promessa
    return x*y 
}
//como é uma prommessapode usar um then
calculaComDelay(3,3).then((value)=>{
 console.log(value)
}).catch((err)=>{
    console.log(`${value}`)
})

function resposaComDelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Resolveu a promessa')
        },3000)
    })

}
async function chamadaDelay(){
    console.log('chamando a promisse, e esperando resultdo')
    const resultado = await resposaComDelay

console.log(`O resultado chegou ${resultado}`)}