const array= [1, 2, 3, 4, 5]


const multi = array.map((elemento)=>{
    return elemento * 2
})

console.log(multi)
const dobro =[(multi)]

const multi3 = array.map((elemento)=>{
    return elemento * 3

})
const triplo =[(multi3)]

console.log(multi3)


const somaTudo = dobro.reduce((elemento,indice)=>{
    return 0,elemento+ indice
    
})
 console.log(somaTudo)